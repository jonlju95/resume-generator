import styles from '../styles/PreviewPane.module.css';
import {FieldValues} from "../types/template.ts";
import PreviewSkillRow from "./PreviewSkillRow.tsx";

interface PreviewPaneProps {
    values: FieldValues;
    fileName: string;
}

const PreviewPane = ({values, fileName}: PreviewPaneProps) => {
    const contactInfo = [
        values.email,
        values.linkedinUrl,
        values.portfolioUrl,
        values.phone,
        values.city,
        values.openToRelocation ? `Open to relocation to ${values.relocationCity}` : null
    ].filter(Boolean).join(' · ');

    const skillsAdded = () => {
        return values.skillsBackend ||
            values.skillsFrontend ||
            values.skillsTools ||
            values.skillsMethods ||
            values.skillsStrengths ||
            values.skillsLanguages;
    }

    return (
        <div className={'col'} style={{width: '100%'}}>
            <div className={`'row' ${styles.previewHeader}`}>
                <div><p>Preview</p></div>
                <div className={styles.headerTag}><p>{fileName}</p></div>
            </div>
            <div className={`'row' ${styles.previewBody}`}>
                <div className={styles.bodyContent}>
                    <div>
                        <h1>{values.fullName as string}</h1>
                        <h3>{values.jobTitle as string}</h3>
                    </div>
                    <p className={styles.contactInfo}>{contactInfo}</p>
                    <div>
                        <h2>{values.summary && 'Summary'}</h2>
                        <p>{values.summary as string}</p>
                    </div>
                    <h2 style={{marginTop: '1rem'}}>{skillsAdded() && 'Skills'}</h2>
                    <PreviewSkillRow label={'Backend'} value={values.skillsBackend as string} type={'backend'}/>
                    <PreviewSkillRow label={'Frontend'} value={values.skillsFrontend as string} type={'frontend'}/>
                    <PreviewSkillRow label={'Tools'} value={values.skillsTools as string} type={'tools'}/>
                    <PreviewSkillRow label={'Methods'} value={values.skillsMethods as string} type={'methods'}/>
                    <PreviewSkillRow label={'Strengths'} value={values.skillsStrengths as string} type={'neutral'}/>
                    <PreviewSkillRow label={'Languages'} value={values.skillsLanguages as string} type={'neutral'}/>
                    <h2 style={{marginTop: '1rem'}}>{values.coverBody && 'Cover letter body'}</h2>
                    <p>{values.coverBody as string}</p>
                </div>

            </div>

        </div>
    );
};

export default PreviewPane;