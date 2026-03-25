import {useEffect, useState} from "react";
import SelectorBtn from "./buttons/SelectorBtn.tsx";

interface SelectorBarProps {
    docType?: string;
    docLang?: string;
    onTemplateChange: (fileName: string) => void;
    onLangChange: (lang: 'en' | 'sv') => void;
}

const SidebarHeader = ({docType = 'resume', docLang = 'en', onTemplateChange, onLangChange}: SelectorBarProps) => {
    const [currentDocType, setCurrentDocType] = useState<string>(docType);
    const [currentDocLang, setCurrentDocLang] = useState<string>(docLang);

    useEffect(() => {
        onTemplateChange(currentDocType + '.' + currentDocLang + '.md');
        onLangChange(currentDocLang as 'en' | 'sv');
    }, [currentDocType, currentDocLang]);

    return (
        <div className={'sidebarHeader'}>
            <div className={'row'}>
                <SelectorBtn label={'Resume'} selected={currentDocType === 'resume'}
                             setSelected={() => setCurrentDocType('resume')}/>
                <SelectorBtn label={'Cover letter'} selected={currentDocType === 'cover-letter'}
                             setSelected={() => setCurrentDocType('cover-letter')}/>
            </div>
            <div className={'row'}>
                <SelectorBtn label={'English'} selected={currentDocLang === 'en'}
                             setSelected={() => setCurrentDocLang('en')}/>
                <SelectorBtn label={'Svenska'} selected={currentDocLang === 'sv'}
                             setSelected={() => setCurrentDocLang('sv')}/>
            </div>
        </div>
    );
};

export default SidebarHeader;