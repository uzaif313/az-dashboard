import { ExtensionContext, commands, window, ViewColumn, Uri } from 'vscode';
import * as path from 'path';

function loadScript(context: ExtensionContext, path: string) {
    return `<script src="${Uri.file(context.asAbsolutePath(path)).with({ scheme: 'vscode-resource' }).toString()}"></script>`;
}

export function activate(context: ExtensionContext) {
    context.subscriptions.push(
        commands.registerCommand('az.dash', () => {
            const panel = window.createWebviewPanel('dash', "Az-Dash!!!", ViewColumn.Active, {
                enableScripts: true,
                retainContextWhenHidden: true,
                localResourceRoots: [Uri.file(path.join(context.extensionPath, 'out')),
                                     Uri.file('https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css')]
            });

            panel.webview.html = `
                <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="utf-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
                </head>
                <body>
                    <div id="root"></div>
                    ${loadScript(context, 'out/vendor.js')}
                    ${loadScript(context, 'out/aliens.js')}
                </body>
                </html>
            `;
        })
    );
}

export function deactivate() {
}