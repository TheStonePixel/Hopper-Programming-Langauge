// Hopper VS Code Extension — formatting support
// Registers a DocumentFormattingEditProvider so VS Code can call
// "hopper fmt" via Format Document / Format on Save.

const vscode      = require('vscode')
const { execSync } = require('child_process')
const path        = require('path')
const os          = require('os')
const fs          = require('fs')

// Resolve the hopper binary:
// 1. User setting  hopper.executablePath
// 2. Dev monorepo location: seed/build_system/hopper (sibling of seed/extensions/)
// 3. Anything named "hopper" on PATH
function resolveHopper() {
    const cfg = vscode.workspace.getConfiguration('hopper').get('executablePath')
    if (cfg) return cfg

    const devBin = path.resolve(__dirname, '..', '..', 'build_system', 'hopper')
    if (fs.existsSync(devBin)) return devBin

    return 'hopper'
}

function activate(context) {
    const provider = vscode.languages.registerDocumentFormattingEditProvider('hopper', {
        provideDocumentFormattingEdits(document) {
            const source = document.getText()
            const tmp    = path.join(os.tmpdir(), `_hopper_fmt_${Date.now()}.hop`)

            try {
                fs.writeFileSync(tmp, source, 'utf8')

                const bin = resolveHopper()
                execSync(`"${bin}" fmt "${tmp}" --write`, {
                    timeout:  10_000,
                    stdio:    'pipe',
                    encoding: 'utf8',
                })

                const formatted = fs.readFileSync(tmp, 'utf8')
                if (formatted === source) return []

                const fullRange = new vscode.Range(
                    document.positionAt(0),
                    document.positionAt(source.length)
                )
                return [vscode.TextEdit.replace(fullRange, formatted)]

            } catch (e) {
                const msg = (e.stderr || e.message || '').split('\n')[0]
                vscode.window.showWarningMessage(`hopper fmt: ${msg}`)
                return []
            } finally {
                try { fs.unlinkSync(tmp) } catch { /* ignore */ }
            }
        }
    })

    context.subscriptions.push(provider)
}

function deactivate() {}

module.exports = { activate, deactivate }
