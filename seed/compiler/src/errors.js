// Hopper compiler diagnostics

const WRAP_WIDTH = 80;

// ANSI colors — disabled when stderr is not a TTY or NO_COLOR is set.
const useColor = process.stderr.isTTY && !process.env.NO_COLOR;

// ── raw ANSI codes ─────────────────────────────────────────────────────────
const ANSI = {
    reset:        "\x1b[0m",
    bold:         "\x1b[1m",
    dim:          "\x1b[2m",
    red:          "\x1b[31m",
    yellow:       "\x1b[33m",
    green:        "\x1b[32m",
    blue:         "\x1b[34m",
    magenta:      "\x1b[35m",
    cyan:         "\x1b[36m",
    white:        "\x1b[37m",
    brightWhite:  "\x1b[97m",
    brightRed:    "\x1b[91m",
    brightYellow: "\x1b[93m",
    brightBlue:   "\x1b[94m",
    brightCyan:   "\x1b[96m",
    gray:         "\x1b[90m",
};

const off = (code) => useColor ? code : "";

// ── theme — change these to restyle all diagnostics ───────────────────────
const THEME = {
    errorBar:    off(ANSI.red),          // │ left bar on error blocks
    warningBar:  off(ANSI.blue),         // │ left bar on warning blocks
    errorWord:   off(ANSI.red),          // "Error:" label
    warningWord: off(ANSI.blue),         // "Warning:" label
    tagLabel:    off(ANSI.dim),          // Module:  File:  Line:
    dataValue:   off(ANSI.brightWhite),  // hello  main.hop  14
    message:     off(ANSI.white),        // indented message text
    hint:        off(ANSI.cyan),         // Hint: ...
    unknown:     off(ANSI.dim),          // (unknown location)
    reset:       off(ANSI.reset),
};

export const Severity = {
    Error:   "Error",
    Warning: "Warning",
};

export const ErrorType = {
    UndeclaredVariable:  "Undeclared variable",
    UndeclaredFunction:  "Undeclared function",
    TypeError:           "Type mismatch",
    ArityError:          "Argument count mismatch",
    EncapsulationError:  "Private field access",
    EnumError:           "Unknown enum variant",
    ConstraintError:     "Constraint violation",
    ParseError:          "Syntax error",
    InternalError:       "Internal compiler error",
};

export const WarnType = {
    TautologicalConstraint: "Redundant constraint",
    UnreachableCode:        "Unreachable code",
    MissingReturn:          "Missing return",
};

export class HopperError extends Error {
    constructor(loc, type, message, hint = null, severity = Severity.Error) {
        super(message);
        this.loc      = loc;    // { module, file, line } or null
        this.errType  = type;
        this.hint     = hint;
        this.severity = severity;
    }
}

export class HopperWarning extends HopperError {
    constructor(loc, type, message, hint = null) {
        super(loc, type, message, hint, Severity.Warning);
    }
}

// Word-wraps a string at WRAP_WIDTH, preserving the leading indent on each
// continuation line.
function wrap(text, indent = "  ") {
    if (text.length <= WRAP_WIDTH) return text;
    const words = text.split(" ");
    const result = [];
    let line = "";
    for (const word of words) {
        if (line.length + word.length + 1 > WRAP_WIDTH && line.length > 0) {
            result.push(line);
            line = indent + word;
        } else {
            line = line.length === 0 ? word : line + " " + word;
        }
    }
    if (line.length > 0) result.push(line);
    return result.join("\n");
}

// Formats a HopperError into the 4-line diagnostic format:
//
//   │ Module: hello  File: main.hop  Line: 14
//   │ Error: Unknown enum variant
//   │        'Purpl' is not a variant of enum 'Color'
//   │ Hint: valid variants: Red, Green, Blue
//
// The │ bar is red for errors, blue for warnings — the only colored element.
export function formatError(err) {
    const T         = THEME;
    const isWarning = err.severity === Severity.Warning;
    const barColor  = isWarning ? T.warningBar : T.errorBar;
    const wordColor = isWarning ? T.warningWord : T.errorWord;
    const label     = isWarning ? "Warning" : "Error";

    // Prefix every line with the colored bar
    const bar = `${barColor}│${T.reset} `;

    // Message indented to clear past "Error: " / "Warning: "
    const msgIndent = " ".repeat(label.length + 2);

    const content = [];

    if (err.loc) {
        const file = err.loc.file.split(/[\\/]/).pop();
        const tag  = t => `${T.tagLabel}${t}:${T.reset}`;
        const val  = v => `${T.dataValue}${v}${T.reset}`;
        const parts = [];
        if (err.loc.module) parts.push(`${tag("Module")} ${val(err.loc.module)}`);
        parts.push(`${tag("File")} ${val(file)}`);
        parts.push(`${tag("Line")} ${val(err.loc.line)}`);
        content.push(parts.join("  "));
    } else {
        content.push(`${T.unknown}(unknown location)${T.reset}`);
    }

    content.push(`${wordColor}${label}:${T.reset} ${err.errType || label}`);
    content.push(wrap(msgIndent + err.message, msgIndent));
    if (err.hint) content.push(`${T.hint}${wrap(`Hint: ${err.hint}`)}${T.reset}`);

    return content.map(line => bar + line).join("\n");
}
