// Lightweight Hopper formatter for browser use — no dependencies.
// Line-based indentation normalizer with basic spacing cleanup.
// Good enough for the interactive demo; use `hopper fmt` CLI for full output.

export function formatHopper(source) {
    const lines = source.split('\n')
    const out = []
    let depth = 0
    let blankRun = 0

    for (let rawLine of lines) {
        const line = rawLine.trim()

        if (!line) {
            blankRun++
            if (blankRun <= 1) out.push('')   // at most one blank line
            continue
        }
        blankRun = 0

        // Dedent before } (may be } or } else {)
        const leadClose = (line.match(/^}+/) || [''])[0].length
        depth = Math.max(0, depth - leadClose)

        out.push('    '.repeat(depth) + line)

        // Net brace change for this line (ignoring string literals roughly)
        let opens = 0, closes = 0, inStr = false
        for (let i = 0; i < line.length; i++) {
            if (line[i] === '"' || line[i] === "'") inStr = !inStr
            if (inStr) continue
            if (line[i] === '{') opens++
            if (line[i] === '}') closes++
        }
        depth += opens - leadClose   // leadClose already applied above
    }

    const result = out.join('\n').trimEnd()
    return result ? result + '\n' : ''
}
