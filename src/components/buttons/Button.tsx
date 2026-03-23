import styles from '../../styles/Button.module.css';

interface ButtonProps {
    label: string;
    onClick: () => void;
}

const Button = ({label, onClick}: ButtonProps) => {
    return (
        <button className={styles.btn} onClick={onClick}>
            {label}
        </button>
    );
};

export default Button;