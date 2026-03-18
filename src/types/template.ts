export type FieldType = 'text' | 'multiline' | 'boolean' | 'skills';

export type FieldDefinition = {
    key: string;
    label: string;
    type: FieldType;
    default: string | boolean;
}

export type Template = {
    fields: FieldDefinition[];
    body: string;
}

export type FieldValues = Record<string, string | boolean>
