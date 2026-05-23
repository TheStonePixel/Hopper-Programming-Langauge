// Hopper compiler diagnostics

const WRAP_WIDTH = 80;

// ANSI colors — disabled when stdout is not a TTY or NO_COLOR is set.
const useColor = process.stderr.isTTY && !process.env.NO_COLOR;

const C = {
    reset:   useColor ? "\x1b[0m"    : "",
    bold:    useColor ? "\x1b[1m"    : "",
    dim:     useColor ? "\x1b[2m"    : "",
    red:     useColor ? "\x1b[1;31m" : "",  // bold red   — errors
    yellow:  useColor ? "\x1b[1;33m" : "",  // bold yellow — warnings
    cyan:    useColor ? "\x1b[36m"   : "",  // cyan        — hints
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
        this.loc      = loc;    // { file, line, col } or null
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

// Word-wraps a string at WRAP_WIDTH, indenting continuation lines.
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
//   Module: hello  File: main.hop  Line: 14      ← bold
//   Error: Undeclared variable                   ← bold red  (Warning → bold yellow)
//          'count' was used before being declared ← indented under the label
//   Hint: add 'int count = ...' before this line ← cyan
export function formatError(err) {
    const isWarning  = err.severity === Severity.Warning;
    const labelColor = isWarning ? C.yellow : C.red;
    const label      = isWarning ? "Warning" : "Error";

    // Indent message to clear past "Error: " / "Warning: "
    const msgIndent  = " ".repeat(label.length + 2);   // "Error: " = 7, "Warning: " = 9

    const lines = [];

    if (err.loc) {
        const file    = err.loc.file.split(/[\\/]/).pop();
        const modPart = err.loc.module ? `Module: ${err.loc.module}  ` : "";
        lines.push(`${C.bold}${modPart}File: ${file}  Line: ${err.loc.line}${C.reset}`);
    } else {
        lines.push(`${C.dim}(unknown location)${C.reset}`);
    }

    lines.push(`${labelColor}${label}: ${err.errType || label}${C.reset}`);
    lines.push(wrap(msgIndent + err.message, msgIndent));
    if (err.hint) lines.push(`${C.cyan}${wrap(`Hint: ${err.hint}`)}${C.reset}`);

    return lines.join("\n");
}
