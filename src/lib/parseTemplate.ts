import frontMatter from 'front-matter';
import { resolveResource } from '@tauri-apps/api/path';
import { readTextFile } from '@tauri-apps/plugin-fs';
import { Template, FieldDefinition, FieldType } from '../types/template';

export async function parseTemplate(templateFile: string): Promise<Template> {
    const resourcePath = await resolveResource(`templates/${templateFile}`);
    const raw = await readTextFile(resourcePath);
    const parsed = frontMatter<{ variables: Record<string, any> }>(raw);

    const fields: FieldDefinition[] = Object.entries(parsed.attributes.variables).map(
        ([key, value]: [string, any]) => ({
            key,
            label: value.label,
            type: value.type as FieldType,
            default: value.default,
        })
    );

    return {
        fields,
        body: parsed.body,
    };
}