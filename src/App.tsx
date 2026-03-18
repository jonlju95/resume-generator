import "./App.css";
import SidebarHeader from "./components/SidebarHeader.tsx";
import SidebarBody from "./components/SidebarBody.tsx";
import {Template} from "./types/template.ts";
import {parseTemplate} from "./lib/parseTemplate.ts";
import {useEffect, useState} from "react";
import PreviewPane from "./components/PreviewPane.tsx";
import SidebarFooter from "./components/SidebarFooter.tsx";

function App() {
    const [template, setTemplate] = useState<Template>();

    useEffect(() => {
        parseTemplate('resume.en.md').then(setTemplate)
    }, [])

    if (!template) return null;

    return (
        <main className="container">
            <aside className="sidebar">
                <SidebarHeader/>
                <SidebarBody template={template} onChange={() => {}}/>
                <SidebarFooter/>
            </aside>
            <PreviewPane/>
        </main>
    );
}

export default App;
