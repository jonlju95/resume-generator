import styles from './SharedToggle.module.css';
import {FieldDefinition, FieldValues} from "../../types/template.ts";
import {UseFormRegister} from "react-hook-form";

interface SharedToggleProps {
    field: FieldDefinition;
    register: UseFormRegister<FieldValues>
}


const SharedToggle = ({field, register}: SharedToggleProps) => {
    return (
        <>
            <span className={styles.toggleLabel}>{field.label}</span>
            <label className={styles.switch}>
                <input type="checkbox" {...register(field.key)}/>
                <span className={`${styles.slider} ${styles.round}`}></span>
            </label>
        </>
    );
};

export default SharedToggle;