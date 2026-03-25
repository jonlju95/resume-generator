import "./App.css";
import SidebarHeader from "./components/SidebarHeader.tsx";
import SidebarBody from "./components/SidebarBody.tsx";
import {FieldValues, Template} from "./types/template.ts";
import {parseTemplate} from "./hooks/parseTemplate.ts";
import {useEffect, useRef, useState} from "react";
import PreviewPane from "./components/PreviewPane.tsx";
import SidebarFooter from "./components/SidebarFooter.tsx";
import {ui} from "./i18n/ui.ts";
import {loadPersonalDefaults, savePersonalDefaults} from "./hooks/store.ts";

function App() {
    const [fileName, setFileName] = useState("resume.en.md");
    const [template, setTemplate] = useState<Template>();
    const [values, setValues] = useState<FieldValues>({})

    const [lang, setLang] = useState<'en' | 'sv'>('en')
    const t = ui[lang]

    const saveTimeout = useRef<ReturnType<typeof setTimeout>>()

    const handleChange = (newValues: FieldValues) => {
        setValues(newValues)
        clearTimeout(saveTimeout.current)
        saveTimeout.current = setTimeout(() => {
            savePersonalDefaults(newValues as Record<string, string | boolean>).then()
        }, 500)
    }

    useEffect(() => {
        Promise.all([
            parseTemplate(fileName),
            loadPersonalDefaults()
        ]).then(([parsedTemplate, personalDefaults]) => {
            setTemplate(parsedTemplate)
            setValues({...values, ...personalDefaults})
        })
    }, [fileName])


    if (!template) return null;

    return (
        <main className="container">
            <aside className="sidebar">
                <SidebarHeader onTemplateChange={setFileName} onLangChange={setLang}/>
                <SidebarBody template={template} values={values} onChange={handleChange} t={t}/>
                <SidebarFooter values={values} body={template.body} t={t}/>
            </aside>
            <PreviewPane values={values} fileName={fileName} t={t}/>
        </main>
    );
}

export default App;
