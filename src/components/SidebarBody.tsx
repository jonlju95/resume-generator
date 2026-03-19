import {FieldValues, Template} from "../types/template.ts";
import {useForm} from "react-hook-form";
import {useEffect} from "react";
import SharedToggle from "./shared/SharedToggle.tsx";
import SharedInput from "./shared/SharedInput.tsx";

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

    return (
        <div className={'sidebarBody'}>
            {template.fields.map(field => (
                    field.type === 'boolean'
                        ? (<SharedToggle key={field.key} field={field} register={register}/>)
                        : (<SharedInput key={field.key} field={field} register={register}/>)
                )
            )}
        </div>
    )
}

export default SidebarBody;