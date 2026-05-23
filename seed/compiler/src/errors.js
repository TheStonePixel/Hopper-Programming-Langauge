// Hopper compiler diagnostics

const WRAP_WIDTH = 80;

// ANSI colors — disabled when stderr is not a TTY or NO_COLOR is set.
const useColor = process.stderr.isTTY && !process.env.NO_COLOR;

const C = {
    reset:  useColor ? "\x1b[0m"    : "",
    white:  useColor ? "\x1b[97m"   : "",  // bright white — data values
    muted:  useColor ? "\x1b[2m"    : "",  // dim          — tag labels (Module:, File:, Line:)
    red:    useColor ? "\x1b[31m"   : "",  // red          — "Error" word + flag character
    blue:   useColor ? "\x1b[34m"   : "",  // blue         — "Warning" word + flag character
    cyan:   useColor ? "\x1b[36m"   : "",  // cyan         — Hint line
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
    if (!loc) return `${flagColor}${flag}${C.reset} ${C.muted}(unknown location)${C.reset}`;

    const file = loc.file.split(/[\\/]/).pop();

    // tag(label) returns dim label text; val(v) returns bright-white value text
    const tag = t => `${C.muted}${t}:${C.reset}`;
    const val = v => `${C.white}${v}${C.reset}`;

    const parts = [];
    if (loc.module) parts.push(`${tag("Module")} ${val(loc.module)}`);
    parts.push(`${tag("File")} ${val(file)}`);
    parts.push(`${tag("Line")} ${val(loc.line)}`);

    return `${flagColor}${flag}${C.reset} ${parts.join("  ")}`;
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
    const isWarning  = err.severity === Severity.Warning;
    const flagColor  = isWarning ? C.blue  : C.red;
    const wordColor  = isWarning ? C.blue  : C.red;
    const flag       = isWarning ? "◆"     : "×";
    const label      = isWarning ? "Warning" : "Error";

    // Message indented to clear past "Error: " / "Warning: "
    const msgIndent = " ".repeat(label.length + 2);

    const lines = [];

    lines.push(locLine(err.loc, flagColor, flag));
    lines.push(`${wordColor}${label}:${C.reset} ${C.white}${err.errType || label}${C.reset}`);
    lines.push(`${C.white}${wrap(msgIndent + err.message, msgIndent)}${C.reset}`);
    if (err.hint) lines.push(`${C.cyan}${wrap(`Hint: ${err.hint}`)}${C.reset}`);

    return lines.join("\n");
}
