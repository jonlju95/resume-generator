import styles from '../styles/PreviewPane.module.css';
import {FieldValues} from "../types/template.ts";
import PreviewSkillRow from "./PreviewSkillRow.tsx";
import {ui} from "../i18n/ui.ts";

interface PreviewPaneProps {
    values: FieldValues;
    fileName: string;
    t: typeof ui['en'];
}

const PreviewPane = ({values, fileName, t}: PreviewPaneProps) => {
    const contactInfo = [
        values.email,
        values.linkedinUrl,
        values.portfolioUrl,
        values.phone,
        values.city,
        values.openToRelocation ? `Open to relocation to ${values.relocationCity}` : null
    ].filter(Boolean).join(' | ');

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
                <div><p>{t.preview}</p></div>
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
                        {fileName.includes('resume')
                            ? (<>
                                <h2>{values.summary && t.summary}</h2><p>{values.summary as string}</p>
                                <h2 style={{marginTop: '1rem'}}>{skillsAdded() && t.skills}</h2>
                                <PreviewSkillRow label={'Backend'} value={values.skillsBackend as string}
                                                 type={'backend'}/>
                                <PreviewSkillRow label={'Frontend'} value={values.skillsFrontend as string}
                                                 type={'frontend'}/>
                                <PreviewSkillRow label={t.tools} value={values.skillsTools as string} type={'tools'}/>
                                <PreviewSkillRow label={t.methods} value={values.skillsMethods as string}
                                                 type={'methods'}/>
                                <PreviewSkillRow label={t.strengths} value={values.skillsStrengths as string}
                                                 type={'neutral'}/>
                                <PreviewSkillRow label={t.lang} value={values.skillsLanguages as string}
                                                 type={'neutral'}/></>)
                            : (<>
                                <h2 style={{marginTop: '1rem'}}>{values.coverBody && 'Cover letter body'}</h2>
                                <p>{values.coverBody as string}</p></>)}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PreviewPane;