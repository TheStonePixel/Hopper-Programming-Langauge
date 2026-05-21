#!/usr/bin/env node
// Migrates CodeBlock instances in Vue views from manual <span> highlighting
// to the :code prop consumed by Shiki.
//
// Stores all code strings as a `codes` object in <script setup> so that
// double-quotes and single-quotes inside code don't break the template parser.
//
// Before:
//   <CodeBlock label="foo">
//     <pre><code><span class="kw">int</span> x = <span class="str">"hello"</span></code></pre>
//   </CodeBlock>
//
// After (in <script setup>):
//   const codes = { c0: `int x = "hello"` }
// After (in template):
//   <CodeBlock label="foo" :code="codes.c0" />

import { readFileSync, writeFileSync } from 'fs'
import { fileURLToPath } from 'url'
import path from 'path'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '..', '..')

const FILES = [
    'website/site/src/views/SyntaxView.vue',
    'website/site/src/views/VsCView.vue',
    'website/site/src/views/AboutView.vue',
].map(f => path.join(ROOT, f))

function decode(html) {
    return html
        .replace(/&lt;/g,   '<')
        .replace(/&gt;/g,   '>')
        .replace(/&amp;/g,  '&')
        .replace(/&quot;/g, '"')
        .replace(/&#39;/g,  "'")
}

function stripSpans(html) {
    return html.replace(/<span[^>]*>/g, '').replace(/<\/span>/g, '')
}

// Escape characters that would break a backtick template literal in JS
function escapeForTemplateLiteral(s) {
    return s.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$\{/g, '\\${')
}

function migrateFile(file) {
    let src = readFileSync(file, 'utf8')

    const extracted = []  // { index, label, code }

    // Collect all convertible CodeBlock instances
    src = src.replace(
        /(<CodeBlock\b[^>]*>)\s*<pre><code>([\s\S]*?)<\/code><\/pre>\s*<\/CodeBlock>/g,
        (match, openTag, rawCode) => {
            // Skip interactive blocks (home demo with contenteditable)
            if (match.includes('contenteditable') || match.includes('fmt-btn')) return match

            const labelMatch = openTag.match(/label="([^"]*)"/)
            const label = labelMatch ? ` label="${labelMatch[1]}"` : ''

            const code = decode(stripSpans(rawCode)).trim()
            const idx  = extracted.length
            extracted.push({ idx, label, code })

            return `<CodeBlock${label} :code="codes.c${idx}" />`
        }
    )

    if (extracted.length === 0) {
        console.log(`  no changes: ${path.basename(file)}`)
        return
    }

    // Build the codes object literal (stored in <script setup>)
    const codeLines = extracted.map(({ idx, code }) => {
        const escaped = escapeForTemplateLiteral(code)
        return `    c${idx}: \`${escaped}\`,`
    })
    const codesBlock = `\nconst codes = {\n${codeLines.join('\n')}\n}\n`

    // Inject into existing <script setup> block, or create one
    if (/^<script setup>/m.test(src)) {
        // Append before the closing </script>
        src = src.replace(/(<script setup>[\s\S]*?)(^<\/script>)/m,
            (_, body, close) => body + codesBlock + close)
    } else {
        // Prepend a new <script setup> block before <template>
        src = src.replace(/^(<template>)/m, `<script setup>\n${codesBlock}</script>\n\n$1`)
    }

    writeFileSync(file, src, 'utf8')
    console.log(`  migrated ${path.basename(file)}: ${extracted.length} block(s)`)
}

console.log('Migrating CodeBlock span-tags → Shiki :code prop...')
for (const f of FILES) migrateFile(f)
console.log('Done.')
