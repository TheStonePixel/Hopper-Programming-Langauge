// Hopper compiler diagnostics

const WRAP_WIDTH = 80;

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

export class HopperError extends Error {
    constructor(loc, type, message, hint = null) {
        super(message);
        this.loc     = loc;    // { file, line, col } or null
        this.errType = type;
        this.hint    = hint;
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
//   main.hop  Line: 14  Position: 5
//   Error: TypeError
//   cannot use 'int' where 'bool' is expected
//   Hint: use cast<bool>(x) or compare explicitly with x != 0
export function formatError(err) {
    const lines = [];

    if (err.loc) {
        const file = err.loc.file.split(/[\\/]/).pop();  // filename only
        lines.push(`${file}  Line: ${err.loc.line}  Position: ${err.loc.col}`);
    } else {
        lines.push("(unknown location)");
    }

    lines.push(`Error: ${err.errType || "Error"}`);
    lines.push(wrap(err.message));
    if (err.hint) lines.push(wrap(`Hint: ${err.hint}`));

    return lines.join("\n");
}
