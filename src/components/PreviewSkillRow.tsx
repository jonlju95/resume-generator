import styles from '../styles/PreviewPane.module.css';
import SharedPill from "./shared/SharedPill.tsx";

interface PreviewSkillRowProps {
    label: string;
    value: string;
    type: string;
}

const PreviewSkillRow = ({label, value, type}: PreviewSkillRowProps) => {
    if (!value) return null;

    return (
        <div className={styles.skillRow}>
            <h5>{label}</h5>
            {(value)?.split(',').map((skill) => (
                <SharedPill key={skill} text={skill.trim()} type={type}/>
            ))}
        </div>
    );
};

export default PreviewSkillRow;