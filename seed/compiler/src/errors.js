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
    errorFlag:    off(ANSI.red),          // × character on error lines
    errorWord:    off(ANSI.red),          // "Error:" label
    warningFlag:  off(ANSI.blue),         // ◆ character on warning lines
    warningWord:  off(ANSI.blue),         // "Warning:" label
    tagLabel:     off(ANSI.dim),          // Module:  File:  Line:
    dataValue:    off(ANSI.brightWhite),  // hello  main.hop  14
    message:      off(ANSI.white),        // indented message text
    hint:         off(ANSI.cyan),         // Hint: ...
    unknown:      off(ANSI.dim),          // (unknown location)
    reset:        off(ANSI.reset),
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

// Renders a location line with dim tag labels and bright-white data values:
//   × Module: hello  File: main.hop  Line: 14
//   ◆ File: main.hop  Line: 14           (no module)
//   ◆ (unknown location)
function locLine(loc, flagColor, flag) {
    const T = THEME;
    if (!loc) return `${flagColor}${flag}${T.reset} ${T.unknown}(unknown location)${T.reset}`;

    const file = loc.file.split(/[\\/]/).pop();

    const tag = t => `${T.tagLabel}${t}:${T.reset}`;
    const val = v => `${T.dataValue}${v}${T.reset}`;

    const parts = [];
    if (loc.module) parts.push(`${tag("Module")} ${val(loc.module)}`);
    parts.push(`${tag("File")} ${val(file)}`);
    parts.push(`${tag("Line")} ${val(loc.line)}`);

    return `${flagColor}${flag}${T.reset} ${parts.join("  ")}`;
}

// Formats a HopperError into the 4-line diagnostic format:
//
//   × Module: hello  File: main.hop  Line: 14    ← flag + dim tags + bright values
//   Error: Undeclared variable                   ← "Error" in red,  rest white
//          'count' was used before being declared ← white, indented under label
//   Hint: add 'int count = ...' before this line ← cyan
//
// For warnings the flag is ◆ and "Warning" is blue.
export function formatError(err) {
    const T         = THEME;
    const isWarning = err.severity === Severity.Warning;
    const flagColor = isWarning ? T.warningFlag : T.errorFlag;
    const wordColor = isWarning ? T.warningWord : T.errorWord;
    const flag      = isWarning ? "◆"           : "×";
    const label     = isWarning ? "Warning"      : "Error";

    // Message indented to clear past "Error: " / "Warning: "
    const msgIndent = " ".repeat(label.length + 2);

    const lines = [];

    lines.push(locLine(err.loc, flagColor, flag));
    lines.push(`${wordColor}${label}:${T.reset} ${T.dataValue}${err.errType || label}${T.reset}`);
    lines.push(`${T.message}${wrap(msgIndent + err.message, msgIndent)}${T.reset}`);
    if (err.hint) lines.push(`${T.hint}${wrap(`Hint: ${err.hint}`)}${T.reset}`);

    return lines.join("\n");
}
