import frontMatter from 'front-matter';
import {resolveResource} from '@tauri-apps/api/path';
import {exists, readTextFile} from '@tauri-apps/plugin-fs';
import {FieldDefinition, FieldType, Template} from '../types/template.ts';

export async function parseTemplate(templateFile: string): Promise<Template> {
    const personalPath = await resolveResource(`./templates/personal/${templateFile}`)
    const defaultPath = await resolveResource(`templates/${templateFile}`)

    const resourcePath = await exists(personalPath) ? personalPath : defaultPath;
    const raw = await readTextFile(resourcePath);
    const parsed = frontMatter<{ variables: Record<string, any> }>(raw);

    const fields: FieldDefinition[] = Object.entries(parsed.attributes.variables).map(
        ([key, value]: [string, any]) => ({
            key,
            label: value.label,
            type: value.type as FieldType,
            group: value.group,
            default: value.default,
        })
    );

    return {
        fields,
        body: parsed.body,
    };
}