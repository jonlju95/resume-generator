import styles from './SelectorBtn.module.css';

interface SelectorBtnProps {
    label: string;
    selected: boolean;
    setSelected: () => void;
}

const SelectorBtn = ({label, selected, setSelected}: SelectorBtnProps) => {
    return (
        <button onClick={setSelected} type="button" className={`${styles.selectorBtn} ${selected ? styles.selected : ''}`}>
            {label}
        </button>
    );
};



export default SelectorBtn;