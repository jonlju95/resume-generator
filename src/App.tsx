import "./App.css";
import SidebarHeader from "./components/SidebarHeader.tsx";
import SidebarBody from "./components/SidebarBody.tsx";
import {FieldValues, Template} from "./types/template.ts";
import {parseTemplate} from "./lib/parseTemplate.ts";
import {useEffect, useState} from "react";
import PreviewPane from "./components/PreviewPane.tsx";
import SidebarFooter from "./components/SidebarFooter.tsx";

function App() {
    const [fileName, setFileName] = useState("resume.en.md");
    const [template, setTemplate] = useState<Template>();
    const [values, setValues] = useState<FieldValues>({})

    useEffect(() => {
        parseTemplate(fileName).then(setTemplate)
    }, [fileName])

    if (!template) return null;

    return (
        <main className="container">
            <aside className="sidebar">
                <SidebarHeader onTemplateChange={setFileName} />
                <SidebarBody template={template} onChange={setValues}/>
                <SidebarFooter/>
            </aside>
            <PreviewPane values={values} fileName={fileName}/>
        </main>
    );
}

export default App;
