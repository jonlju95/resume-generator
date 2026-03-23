import {Document, Page, pdf, StyleSheet, View} from '@react-pdf/renderer'
import Handlebars from 'handlebars'
import {FieldValues} from '../types/template'
import {markdownToPdf} from "./markdownToPdf.tsx";

const styles = StyleSheet.create({
    page: {
        padding: 48,
        fontFamily: 'Helvetica',
        fontSize: 11,
        color: '#1A1714',
        lineHeight: 1.6,
    },
});

export async function renderPdf(values: FieldValues, body: string): Promise<Blob> {
    const template = Handlebars.compile(body)
    const compiled = template(values)

    const doc = (
        <Document>
            <Page size="A4" style={styles.page}>
                <View>{markdownToPdf(compiled)}</View>
            </Page>
        </Document>
    )

    return await pdf(doc).toBlob()
}