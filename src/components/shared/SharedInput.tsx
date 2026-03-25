import styles from '../../styles/SharedInput.module.css';
import {FieldDefinition, FieldValues} from "../../types/template.ts";
import {UseFormRegister} from "react-hook-form";

interface SharedInputProps {
    field: FieldDefinition;
    register: UseFormRegister<FieldValues>
}

const SharedInput = ({field, register}: SharedInputProps) => {
    return (
        <label className={styles.label}>
            {field.label}
            {field.type === 'multiline'
                ? <textarea {...register(field.key)} placeholder={String(field.default)}/>
                : <input {...register(field.key)} placeholder={String(field.default)} className={styles.input}/>
            }
        </label>
    );
};

export default SharedInput;