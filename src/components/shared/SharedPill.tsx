import styles from '../../styles/SharedPill.module.css';

interface PillProps {
    text: string
    type: string
}

const pillColors: Record<string, string> = {
    backend: styles.backend,
    frontend: styles.frontend,
    tools: styles.tools,
    methods: styles.methods,
    strengths: styles.neutral,
    languages: styles.neutral,
}

const SharedPill = ({text, type}: PillProps) => {
    if (!text) return null;

    return (
        <span className={`${styles.pill} ${pillColors[type] ?? styles.neutral}`}>
      {text}
    </span>
    )
};

export default SharedPill;