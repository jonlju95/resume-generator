import {ReactNode, useState} from 'react'
import styles from '../styles/Accordion.module.css'

interface AccordionProps {
    label: string
    children: ReactNode
    defaultOpen?: boolean
}

const Accordion = ({ label, children, defaultOpen = false }: AccordionProps) => {
    const [open, setOpen] = useState(defaultOpen)

    return (
        <div className={styles.accordion}>
            <button
                type="button"
                className={styles.trigger}
                onClick={() => setOpen(!open)}
            >
                <span>{label}</span>
                <span className={`${styles.chevron} ${open ? styles.chevronOpen : ''}`}>›</span>
            </button>
            {open && (
                <div className={styles.content}>
                    {children}
                </div>
            )}
        </div>
    )
}

export default Accordion