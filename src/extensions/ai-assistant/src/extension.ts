import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    console.log('AegisCode AI Assistant extension is now active!');
    
    // Generate Code Command
    const generateCodeCommand = vscode.commands.registerCommand(
        'aegiscode.aiAssistant.generateCode',
        async () => {
            const prompt = await vscode.window.showInputBox({
                prompt: 'Describe the code you want to generate',
                placeHolder: 'e.g., Create a React component for a todo list'
            });
            
            if (prompt) {
                vscode.window.showInformationMessage(`Generating code: ${prompt}`);
                // TODO: Integrate with AegisCode AI API
            }
        }
    );
    
    // Explain Code Command
    const explainCodeCommand = vscode.commands.registerCommand(
        'aegiscode.aiAssistant.explainCode',
        async () => {
            const editor = vscode.window.activeTextEditor;
            if (!editor) {
                vscode.window.showWarningMessage('No active editor found');
                return;
            }
            
            const selection = editor.selection;
            const selectedText = editor.document.getText(selection);
            
            if (!selectedText) {
                vscode.window.showWarningMessage('No code selected');
                return;
            }
            
            vscode.window.showInformationMessage('Explaining selected code...');
            // TODO: Integrate with AegisCode AI API
        }
    );
    
    // Refactor Code Command
    const refactorCodeCommand = vscode.commands.registerCommand(
        'aegiscode.aiAssistant.refactorCode',
        async () => {
            const editor = vscode.window.activeTextEditor;
            if (!editor) {
                vscode.window.showWarningMessage('No active editor found');
                return;
            }
            
            const selection = editor.selection;
            const selectedText = editor.document.getText(selection);
            
            if (!selectedText) {
                vscode.window.showWarningMessage('No code selected');
                return;
            }
            
            vscode.window.showInformationMessage('Refactoring selected code...');
            // TODO: Integrate with AegisCode AI API
        }
    );
    
    context.subscriptions.push(
        generateCodeCommand,
        explainCodeCommand,
        refactorCodeCommand
    );
}

export function deactivate() {
    console.log('AegisCode AI Assistant extension deactivated');
}
