const vscode = require('vscode');

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
	vscode.window.showInformationMessage('Hello from devspace!');

	context.subscriptions.push(vscode.commands.registerCommand('vscodine.open', () => {
		vscode.window.showInformationMessage('Open VSCodine.');
	}));

	let statusBar = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right, 100);
	statusBar.text = 'VSCodine';
	statusBar.tooltip = 'This does nothing';
	statusBar.command = 'vscodine.open';
	statusBar.show();

	context.subscriptions.push(statusBar);
	
	vscode.window.showInformationMessage(statusBar.text);
}

// This method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
