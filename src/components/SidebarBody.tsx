import {FieldDefinition, FieldValues, Template} from "../types/template.ts";
import {useForm} from "react-hook-form";
import {useEffect, useRef} from "react";
import SharedToggle from "./shared/SharedToggle.tsx";
import SharedInput from "./shared/SharedInput.tsx";
import Accordion from "./Accordion.tsx";
import {ui} from "../i18n/ui.ts";

interface FieldFormProps {
    template: Template;
    values: FieldValues;
    onChange: (values: FieldValues) => void;
    t: typeof ui['en'];
}

const SidebarBody = ({template, values, onChange, t}: FieldFormProps) => {
    const {register, watch, reset} = useForm<FieldValues>()
    const isResetting = useRef(false)

    useEffect(() => {
        const subscription = watch((values) => {
            if (!isResetting.current) {
                onChange(values as FieldValues)
            }
        })
        return () => subscription.unsubscribe()
    }, [watch, onChange])

    useEffect(() => {
        if (values && Object.keys(values).length > 0) {
            isResetting.current = true
            reset(values)
            setTimeout(() => { isResetting.current = false }, 0)
        }
    }, [values])

    const groups = template.fields.reduce((acc, field) => {
        const group = field.group ?? 'general'
        if (!acc[group]) acc[group] = []
        acc[group].push(field)
        return acc
    }, {} as Record<string, FieldDefinition[]>)

    return (
        <div className="sidebarBody">
            {Object.entries(groups).map(([group, fields]) => (
                <Accordion key={group} label={t[group as keyof typeof ui['en']] ?? group} defaultOpen={group === 'personal'}>
                    {fields.map(field => (
                        field.type === 'boolean'
                            ? <SharedToggle key={field.key} field={field} register={register} />
                            : <SharedInput key={field.key} field={field} register={register} />
                    ))}
                </Accordion>
            ))}
        </div>
    )
}

export default SidebarBody;