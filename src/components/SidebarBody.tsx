import {FieldDefinition, FieldValues, Template} from "../types/template.ts";
import {useForm} from "react-hook-form";
import {useEffect} from "react";
import SharedToggle from "./shared/SharedToggle.tsx";
import SharedInput from "./shared/SharedInput.tsx";
import Accordion from "./Accordion.tsx";

interface FieldFormProps {
    template: Template;
    onChange: (values: FieldValues) => void;
}

const SidebarBody = ({template, onChange}: FieldFormProps) => {
    const {register, watch} = useForm<FieldValues>()

    useEffect(() => {
        const subscription = watch((values) => {
            onChange(values as FieldValues)
        })
        return () => subscription.unsubscribe()
    }, [watch, onChange])

    const groups = template.fields.reduce((acc, field) => {
        const group = field.group ?? 'general'
        if (!acc[group]) acc[group] = []
        acc[group].push(field)
        return acc
    }, {} as Record<string, FieldDefinition[]>)

    return (
        <div className="sidebarBody">
            {Object.entries(groups).map(([group, fields]) => (
                <Accordion key={group} label={group} defaultOpen={group === 'personal'}>
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