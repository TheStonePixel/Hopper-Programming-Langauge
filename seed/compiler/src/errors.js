// Hopper compiler diagnostics

// Total visual width of each diagnostic block (bar + space + content).
// Content wraps at BOX_WIDTH - 2; the └─── closer fills to BOX_WIDTH.
const BOX_WIDTH = 60;

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
    orange:       "\x1b[38;5;208m",
};

const off = (code) => useColor ? code : "";

// ── theme — change these to restyle all diagnostics ───────────────────────
const THEME = {
    errorBar:      off(ANSI.red),          // │ left bar on error blocks
    warningBar:    off(ANSI.brightBlue),  // │ left bar on warning blocks
    constraintBar: off(ANSI.orange),      // │ left bar on constraint warning blocks
    cascadeBar:    off(ANSI.brightRed),   // │ left bar on cascade (note) blocks
    parseBar:      off(ANSI.magenta),     // │ left bar on parse error blocks
    successBar:    off(ANSI.green),       // │ left bar on success blocks
    errorWord:     off(ANSI.red),         // "Error:" label
    warningWord:   off(ANSI.brightBlue),  // "Warning:" label
    constraintWord:off(ANSI.orange),      // "Warning:" label on constraint blocks
    cascadeWord:   off(ANSI.brightRed),   // "Note:" label
    parseWord:     off(ANSI.magenta),     // "Syntax error:" label
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
    UnusedVariable:         "Unused variable",
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

// Word-wraps a string at BOX_WIDTH - 2 (content column), preserving the
// leading indent on each continuation line.
function wrap(text, indent = "  ") {
    const limit = BOX_WIDTH - 2;
    if (text.length <= limit) return text;
    const words = text.split(" ");
    const result = [];
    let line = "";
    for (const word of words) {
        if (line.length + word.length + 1 > limit && line.length > 0) {
            result.push(line);
            line = indent + word;
        } else {
            line = line.length === 0 ? word : line + " " + word;
        }
    }
    if (line.length > 0) result.push(line);
    return result.join("\n");
}

// Formats a HopperError into the diagnostic block format:
//
//   │ Module: hello  File: main.hop  Line: 14
//   │ Error: Unknown enum variant
//   │        'Purpl' is not a variant of enum 'Color'
//   │ Hint: valid variants: Red, Green, Blue
//   └──────────────────────────────────────────────
//
// The │ bar and └── closer are the only colored elements: red for errors,
// bright-blue for warnings.
export function formatError(err) {
    const T         = THEME;
    const isCascade    = err.isCascade === true;
    const isParse      = !isCascade && err.errType === ErrorType.ParseError;
    const isWarning    = !isCascade && !isParse && err.severity === Severity.Warning;
    const isConstraint = isWarning && err.errType === WarnType.TautologicalConstraint;
    const barColor  = isCascade ? T.cascadeBar    : isParse ? T.parseBar  : isConstraint ? T.constraintBar  : isWarning ? T.warningBar : T.errorBar;
    const wordColor = isCascade ? T.cascadeWord   : isParse ? T.parseWord : isConstraint ? T.constraintWord : isWarning ? T.warningWord : T.errorWord;
    const label     = isCascade ? "Note"          : isParse ? "Syntax"   : isWarning ? "Warning" : "Error";

    const bar    = `${barColor}│${T.reset} `;
    const closer = `${barColor}└${"─".repeat(BOX_WIDTH - 1)}${T.reset}`;

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

    if (isParse) {
        // Parse errors: combine label + message on one line — no separate errType
        content.push(wrap(`${wordColor}Syntax error:${T.reset} ${err.message}`, "              "));
    } else {
        content.push(`${wordColor}${label}:${T.reset} ${err.errType || label}`);
        content.push(wrap(msgIndent + err.message, msgIndent));
    }
    if (err.hint) content.push(`${T.hint}${wrap(`Hint: ${err.hint}`)}${T.reset}`);

    const allLines = content.flatMap(c => c.split("\n"));
    return allLines.map(line => bar + line).join("\n") + "\n" + closer + "\n";
}

// Formats a build-success block:
//
//   │ Built: hello  Profile: dev
//   │ Output: build/hello
//   └──────────────────────────────────────────────────────────
//
// outputPath should be relative to the project root for readability.
export function formatSuccess(projectName, profile, outputPath) {
    const T      = THEME;
    const bar    = `${T.successBar}│${T.reset} `;
    const closer = `${T.successBar}└${"─".repeat(BOX_WIDTH - 1)}${T.reset}`;
    const tag    = t => `${T.tagLabel}${t}:${T.reset}`;
    const val    = v => `${T.dataValue}${v}${T.reset}`;
    const lines  = [
        `${tag("Built")} ${val(projectName)}  ${tag("Profile")} ${val(profile)}`,
        `${tag("Output")} ${val(outputPath)}`,
    ];
    return lines.map(l => bar + l).join("\n") + "\n" + closer + "\n";
}
