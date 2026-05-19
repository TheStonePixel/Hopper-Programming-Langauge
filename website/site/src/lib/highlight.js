import { createHighlighter } from 'shiki'
import grammar from '@hopper-grammar'

const HOPPER_LANG = {
    name: 'hopper',
    scopeName: 'source.hopper',
    ...grammar,
}

const HOPPER_THEME = {
    name: 'hopper-light',
    type: 'light',
    colors: { 'editor.background': '#ffffff', 'editor.foreground': '#1f2937' },
    tokenColors: [
        { scope: ['keyword', 'storage.type', 'storage.modifier'],
          settings: { foreground: '#2563eb', fontStyle: 'bold' } },
        { scope: ['entity.name.type', 'support.type'],
          settings: { foreground: '#0891b2' } },
        { scope: ['string', 'string.quoted'],
          settings: { foreground: '#059669' } },
        { scope: ['constant.numeric', 'constant.language'],
          settings: { foreground: '#d97706' } },
        { scope: ['comment', 'comment.line'],
          settings: { foreground: '#9ca3af', fontStyle: 'italic' } },
        { scope: ['entity.name.function', 'support.function'],
          settings: { foreground: '#7c3aed' } },
        { scope: ['variable', 'variable.other'],
          settings: { foreground: '#1f2937' } },
        { scope: ['punctuation.definition', 'punctuation'],
          settings: { foreground: '#6b7280' } },
    ],
}

let _highlighter = null

async function getHighlighter() {
    if (!_highlighter) {
        _highlighter = await createHighlighter({
            themes: [HOPPER_THEME],
            langs: [HOPPER_LANG],
        })
    }
    return _highlighter
}

export async function highlight(code) {
    const h = await getHighlighter()
    return h.codeToHtml(code, { lang: 'hopper', theme: 'hopper-light' })
}
