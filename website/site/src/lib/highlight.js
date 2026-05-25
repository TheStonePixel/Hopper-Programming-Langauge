// Singleton Shiki highlighter for Hopper source code.
// Loads once on first use; subsequent calls are synchronous-fast.

import { createHighlighter } from 'shiki'
import grammar from '@hopper-grammar'

const lightTheme = {
    name: 'hopper-light',
    type: 'light',
    colors: {
        'editor.background': '#ffffff',
        'editor.foreground': '#1e293b',
    },
    tokenColors: [
        { scope: 'comment.line.double-slash.hopper',
          settings: { foreground: '#94a3b8', fontStyle: 'italic' } },

        { scope: 'keyword.memory.hopper',
          settings: { foreground: '#dc2626' } },
        { scope: 'keyword.control.hopper',
          settings: { foreground: '#2563eb', fontStyle: 'bold' } },
        { scope: 'keyword.function.hopper',
          settings: { foreground: '#2563eb', fontStyle: 'bold' } },
        { scope: 'keyword.other.hopper',
          settings: { foreground: '#2563eb' } },
        { scope: 'keyword.class.hopper',
          settings: { foreground: '#d97706', fontStyle: 'bold' } },
        { scope: 'keyword.struct.hopper',
          settings: { foreground: '#059669', fontStyle: 'bold' } },
        { scope: 'keyword.template.hopper',
          settings: { foreground: '#9333ea', fontStyle: 'bold' } },
        { scope: 'keyword.interface.hopper',
          settings: { foreground: '#0e7490', fontStyle: 'bold' } },

        { scope: 'storage.type.hopper',
          settings: { foreground: '#0891b2' } },

        { scope: 'variable.language.self.hopper',
          settings: { foreground: '#d97706', fontStyle: 'italic' } },

        { scope: 'constant.language.hopper',
          settings: { foreground: '#7c3aed' } },

        { scope: ['constant.numeric.integer.hopper', 'constant.numeric.float.hopper',
                  'constant.character.hopper'],
          settings: { foreground: '#b45309' } },
        { scope: 'constant.numeric.hex.hopper',
          settings: { foreground: '#c2410c' } },

        { scope: 'string.quoted.double.hopper',
          settings: { foreground: '#16a34a' } },
        { scope: 'constant.character.escape.hopper',
          settings: { foreground: '#0891b2' } },

        { scope: ['keyword.operator.comparison.hopper',
                  'keyword.operator.assignment.hopper',
                  'keyword.operator.bitwise.hopper',
                  'keyword.operator.arithmetic.hopper'],
          settings: { foreground: '#64748b' } },
        { scope: 'keyword.operator.logical.hopper',
          settings: { foreground: '#7c3aed' } },

        { scope: 'entity.name.function.hopper',
          settings: { foreground: '#1d4ed8' } },
        { scope: 'support.function.method.hopper',
          settings: { foreground: '#1d4ed8' } },
        { scope: 'entity.name.type.class.hopper',
          settings: { foreground: '#d97706', fontStyle: 'bold' } },
        { scope: 'entity.name.type.struct.hopper',
          settings: { foreground: '#059669', fontStyle: 'bold' } },
        { scope: 'entity.name.type.template.hopper',
          settings: { foreground: '#9333ea', fontStyle: 'bold' } },
        { scope: 'entity.name.type.interface.hopper',
          settings: { foreground: '#0e7490', fontStyle: 'bold' } },
    ],
}

const darkTheme = {
    name: 'hopper-dark',
    type: 'dark',
    colors: {
        // Transparent so the CodeBlock's own bg shows through, matching
        // the .shiki-wrap rule that already forces transparent.
        'editor.background': '#00000000',
        'editor.foreground': '#e2e8f0',
    },
    tokenColors: [
        { scope: 'comment.line.double-slash.hopper',
          settings: { foreground: '#64748b', fontStyle: 'italic' } },

        { scope: 'keyword.memory.hopper',
          settings: { foreground: '#f87171' } },
        { scope: 'keyword.control.hopper',
          settings: { foreground: '#60a5fa', fontStyle: 'bold' } },
        { scope: 'keyword.function.hopper',
          settings: { foreground: '#60a5fa', fontStyle: 'bold' } },
        { scope: 'keyword.other.hopper',
          settings: { foreground: '#60a5fa' } },
        { scope: 'keyword.class.hopper',
          settings: { foreground: '#fbbf24', fontStyle: 'bold' } },
        { scope: 'keyword.struct.hopper',
          settings: { foreground: '#34d399', fontStyle: 'bold' } },
        { scope: 'keyword.template.hopper',
          settings: { foreground: '#c084fc', fontStyle: 'bold' } },
        { scope: 'keyword.interface.hopper',
          settings: { foreground: '#22d3ee', fontStyle: 'bold' } },

        { scope: 'storage.type.hopper',
          settings: { foreground: '#22d3ee' } },

        { scope: 'variable.language.self.hopper',
          settings: { foreground: '#fbbf24', fontStyle: 'italic' } },

        { scope: 'constant.language.hopper',
          settings: { foreground: '#a78bfa' } },

        { scope: ['constant.numeric.integer.hopper', 'constant.numeric.float.hopper',
                  'constant.character.hopper'],
          settings: { foreground: '#fbbf24' } },
        { scope: 'constant.numeric.hex.hopper',
          settings: { foreground: '#fb923c' } },

        { scope: 'string.quoted.double.hopper',
          settings: { foreground: '#4ade80' } },
        { scope: 'constant.character.escape.hopper',
          settings: { foreground: '#22d3ee' } },

        { scope: ['keyword.operator.comparison.hopper',
                  'keyword.operator.assignment.hopper',
                  'keyword.operator.bitwise.hopper',
                  'keyword.operator.arithmetic.hopper'],
          settings: { foreground: '#94a3b8' } },
        { scope: 'keyword.operator.logical.hopper',
          settings: { foreground: '#a78bfa' } },

        { scope: 'entity.name.function.hopper',
          settings: { foreground: '#93c5fd' } },
        { scope: 'support.function.method.hopper',
          settings: { foreground: '#93c5fd' } },
        { scope: 'entity.name.type.class.hopper',
          settings: { foreground: '#fbbf24', fontStyle: 'bold' } },
        { scope: 'entity.name.type.struct.hopper',
          settings: { foreground: '#34d399', fontStyle: 'bold' } },
        { scope: 'entity.name.type.template.hopper',
          settings: { foreground: '#c084fc', fontStyle: 'bold' } },
        { scope: 'entity.name.type.interface.hopper',
          settings: { foreground: '#22d3ee', fontStyle: 'bold' } },
    ],
}

let _highlighter = null

async function getHighlighter() {
    if (!_highlighter) {
        _highlighter = await createHighlighter({
            themes: [lightTheme, darkTheme],
            langs:  [{ ...grammar, name: 'hopper' }],
        })
    }
    return _highlighter
}

function currentThemeName() {
    if (typeof document === 'undefined') return 'hopper-light'
    return document.documentElement.getAttribute('data-theme') === 'dark'
        ? 'hopper-dark'
        : 'hopper-light'
}

export async function highlight(code, themeOverride) {
    const h = await getHighlighter()
    const themeName = themeOverride
        ? (themeOverride === 'dark' ? 'hopper-dark' : 'hopper-light')
        : currentThemeName()
    return h.codeToHtml(code, { lang: 'hopper', theme: themeName })
}
