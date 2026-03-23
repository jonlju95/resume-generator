export type FieldType = 'text' | 'multiline' | 'boolean';

export type FieldDefinition = {
    key: string;
    label: string;
    type: FieldType;
    group: string;
    default: string | boolean;
}

export type Template = {
    fields: FieldDefinition[];
    body: string;
}

export type FieldValues = Record<string, string | boolean>
