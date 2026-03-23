import {marked, Token} from 'marked';
import {StyleSheet, Text, View} from '@react-pdf/renderer'
import {ReactElement} from "react"

const styles = StyleSheet.create({
    h1: {fontSize: 22, fontWeight: 'bold', marginBottom: 4},
    h2: {
        fontSize: 13,
        fontWeight: 'bold',
        marginTop: 14,
        marginBottom: 4,
        textTransform: 'uppercase',
        letterSpacing: 1.2,
        color: '#9E968E'
    },
    h3: {fontSize: 11, fontWeight: 'bold', marginTop: 10, marginBottom: 2},
    paragraph: {fontSize: 10, lineHeight: 1.6, marginBottom: 6},
    listItem: {fontSize: 10, lineHeight: 1.6, marginLeft: 12, marginBottom: 2},
    divider: {borderBottomWidth: 0.5, borderBottomColor: '#D9D3CC', marginVertical: 8},
    strong: {fontWeight: 'bold'},
})

function renderInline(text: string) {
    const parts = text.split(/(\*\*[^*]+\*\*)/g)
    return parts.map((part, i) => {
        if (part.startsWith('**') && part.endsWith('**')) {
            return <Text key={i} style={styles.strong}>{part.slice(2, -2)}</Text>
        }
        return <Text key={i}>{part}</Text>
    })
}

function renderToken(token: Token, i: number): ReactElement | null {
    switch (token.type) {
        case 'heading':
            const headingStyle = token.depth === 1 ? styles.h1 : styles.h3
            return <Text key={i} style={headingStyle}>{token.text}</Text>

        case 'paragraph':
            return (
                <Text key={i} style={styles.paragraph}>
                    {renderInline(token.text)}
                </Text>
            )

        case 'list':
            return (
                <View key={i}>
                    {token.items.map((item: any, j: number) => (
                        <Text key={j} style={styles.listItem}>
                            • {item.text}
                        </Text>
                    ))}
                </View>
            )

        case 'hr':
            return <View key={i} style={styles.divider}/>

        case 'space':
            return <View key={i} style={{marginBottom: 4}}/>

        default:
            return null
    }
}

export function markdownToPdf(markdown: string) {
    const tokens = marked.lexer(markdown)
    const groups: ReactElement[] = []
    let currentGroup: ReactElement[] = []
    let currentHeading: ReactElement | null = null

    tokens.forEach((token, i) => {
        if (token.type === 'heading' && token.depth === 2) {
            if (currentHeading) {
                groups.push(
                    <View key={`group-${i}`} wrap={false}>
                        {currentHeading}
                        {currentGroup}
                    </View>
                )
            } else if (currentGroup.length > 0) {
                groups.push(
                    <View key={`pre-${i}`}>
                        {currentGroup}
                    </View>
                )
            }
            currentHeading = <Text key={i} style={styles.h2}>{token.text}</Text>
            currentGroup = []
        } else {
            const rendered = renderToken(token, i)
            if (rendered) currentGroup.push(rendered)
        }
    })

    if (currentHeading) {
        groups.push(
            <View key="group-last" wrap={false}>
                {currentHeading}
                {currentGroup}
            </View>
        )
    } else {
        groups.push(
            <View key="group-last" wrap={false}>
                {currentGroup}
            </View>
        )
    }

    console.log(groups)
    return groups
}