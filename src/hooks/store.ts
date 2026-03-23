import {load} from '@tauri-apps/plugin-store'

const STORE_FILE = 'settings.json'
const PERSONAL_KEYS = ['fullName', 'email', 'phone', 'city', 'linkedinUrl', 'portfolioUrl']

export async function loadPersonalDefaults(): Promise<Record<string, string | boolean>> {
    const store = await load(STORE_FILE, {autoSave: true, defaults: {}})
    const result: Record<string, string | boolean> = {}
    for (const key of PERSONAL_KEYS) {
        const value = await store.get<string | boolean>(key)
        if (value !== null && value !== undefined) result[key] = value
    }
    return result
}

export async function savePersonalDefaults(values: Record<string, string | boolean>) {
    const store = await load(STORE_FILE, {autoSave: true, defaults: {}})
    for (const key of PERSONAL_KEYS) {
        if (values[key] !== undefined) await store.set(key, values[key])
    }
}