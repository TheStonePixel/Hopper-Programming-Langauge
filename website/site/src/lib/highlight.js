// Singleton Shiki highlighter for Hopper source code.
// Loads once on first use; subsequent calls are synchronous-fast.

import { createHighlighter } from 'shiki'
import grammar from '@hopper-grammar'

const theme = {
    name: 'hopper-light',
    type: 'light',
    colors: {
        'editor.background': '#ffffff',
        'editor.foreground': '#1e293b',
    },
    tokenColors: [
        { scope: 'comment.line.double-slash.hopper',
          settings: { foreground: '#94a3b8', fontStyle: 'italic' } },

        // Memory operators (::, allocate, deallocate)
        { scope: 'keyword.memory.hopper',
          settings: { foreground: '#dc2626' } },

        // Control flow
        { scope: 'keyword.control.hopper',
          settings: { foreground: '#2563eb', fontStyle: 'bold' } },

        // function / entry / extern
        { scope: 'keyword.function.hopper',
          settings: { foreground: '#2563eb', fontStyle: 'bold' } },

        // import / from / const / enum / cast / alias …
        { scope: 'keyword.other.hopper',
          settings: { foreground: '#2563eb' } },

        // class / constructor / destructor
        { scope: 'keyword.class.hopper',
          settings: { foreground: '#d97706', fontStyle: 'bold' } },

        { scope: 'keyword.struct.hopper',
          settings: { foreground: '#059669', fontStyle: 'bold' } },

        { scope: 'keyword.template.hopper',
          settings: { foreground: '#9333ea', fontStyle: 'bold' } },

        { scope: 'keyword.interface.hopper',
          settings: { foreground: '#0e7490', fontStyle: 'bold' } },

        // Primitive types (int, bool, float, byte, address …)
        { scope: 'storage.type.hopper',
          settings: { foreground: '#0891b2' } },

        // self
        { scope: 'variable.language.self.hopper',
          settings: { foreground: '#d97706', fontStyle: 'italic' } },

        // true / false / null
        { scope: 'constant.language.hopper',
          settings: { foreground: '#7c3aed' } },

        // Integer and float literals
        { scope: ['constant.numeric.integer.hopper', 'constant.numeric.float.hopper',
                  'constant.character.hopper'],
          settings: { foreground: '#b45309' } },

        // Hex literals  (0xFF…)
        { scope: 'constant.numeric.hex.hopper',
          settings: { foreground: '#c2410c' } },

        // Strings
        { scope: 'string.quoted.double.hopper',
          settings: { foreground: '#16a34a' } },
        { scope: 'constant.character.escape.hopper',
          settings: { foreground: '#0891b2' } },

        // Operators
        { scope: ['keyword.operator.comparison.hopper',
                  'keyword.operator.assignment.hopper',
                  'keyword.operator.bitwise.hopper',
                  'keyword.operator.arithmetic.hopper'],
          settings: { foreground: '#64748b' } },
        { scope: 'keyword.operator.logical.hopper',
          settings: { foreground: '#7c3aed' } },

        // Named entities
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

let _highlighter = null

async function getHighlighter() {
    if (!_highlighter) {
        _highlighter = await createHighlighter({
            themes: [theme],
            langs:  [{ ...grammar, name: 'hopper' }],
        })
    }
    return _highlighter
}

export async function highlight(code) {
    const h = await getHighlighter()
    return h.codeToHtml(code, { lang: 'hopper', theme: 'hopper-light' })
}
