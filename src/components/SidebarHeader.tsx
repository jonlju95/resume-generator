import {useState} from "react";
import SelectorBtn from "./SelectorBtn/SelectorBtn.tsx";

interface SelectorBarProps {
    docType?: string;
    docLang?: string;
}

const SidebarHeader = ({docType = 'resume', docLang = 'en'}: SelectorBarProps) => {
    const [currentDocType, setCurrentDocType] = useState<string>(docType);
    const [currentDocLang, setCurrentDocLang] = useState<string>(docLang)

    return (
        <div className={'sidebarHeader'}>
            <div className={'row'}>
                <SelectorBtn label={'Resume'} selected={currentDocType === 'resume'}
                             setSelected={() => setCurrentDocType('resume')}/>
                <SelectorBtn label={'Cover letter'} selected={currentDocType === 'coverLetter'}
                             setSelected={() => setCurrentDocType('coverLetter')}/>
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