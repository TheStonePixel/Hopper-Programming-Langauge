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
    UndeclaredVariable:  "UndeclaredVariable",
    UndeclaredFunction:  "UndeclaredFunction",
    TypeError:           "TypeError",
    ArityError:          "ArityError",
    EncapsulationError:  "EncapsulationError",
    EnumError:           "EnumError",
    ConstraintError:     "ConstraintError",
    ParseError:          "ParseError",
    InternalError:       "InternalError",
};

export const WarnType = {
    TautologicalConstraint: "TautologicalConstraint",
    UnreachableCode:        "UnreachableCode",
    MissingReturn:          "MissingReturn",
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
//   main.hop  Line: 14  Position: 5       ← bold
//   Error: TypeError                      ← bold red  (or bold yellow for Warning)
//   'count' is not declared               ← normal
//   Hint: declare it before use           ← cyan
export function formatError(err) {
    const isWarning = err.severity === Severity.Warning;
    const labelColor = isWarning ? C.yellow : C.red;
    const label      = isWarning ? "Warning" : "Error";

    const lines = [];

    if (err.loc) {
        const file = err.loc.file.split(/[\\/]/).pop();
        lines.push(`${C.bold}${file}  Line: ${err.loc.line}  Position: ${err.loc.col}${C.reset}`);
    } else {
        lines.push(`${C.dim}(unknown location)${C.reset}`);
    }

    lines.push(`${labelColor}${label}: ${err.errType || label}${C.reset}`);
    lines.push(wrap(err.message));
    if (err.hint) lines.push(`${C.cyan}${wrap(`Hint: ${err.hint}`)}${C.reset}`);

    return lines.join("\n");
}
