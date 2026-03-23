import Button from "./buttons/Button.tsx";
import {save} from '@tauri-apps/plugin-dialog';
import {writeFile} from '@tauri-apps/plugin-fs'
import {renderPdf} from "../lib/renderPdf.tsx";
import {FieldValues} from "../types/template.ts";

interface FooterProps {
    values: FieldValues;
    body: string;
}

const SidebarFooter = ({values, body}: FooterProps) => {

    const saveFile = async () => {
        if (!body) return
        const blob = await renderPdf(values, body)
        const savePath = await save({filters: [{name: 'PDF', extensions: ['pdf']}]})
        if (savePath) {
            const buffer = await blob.arrayBuffer()
            await writeFile(savePath, new Uint8Array(buffer))
        }
    }

    return (
        <div className="sidebarFooter">
            <Button label={'Export PDF'} onClick={saveFile}/>
        </div>
    );
};

export default SidebarFooter;