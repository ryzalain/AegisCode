# Extension Development Guide

AegisCode supports full `.vsix` extension compatibility, allowing you to extend functionality with Visual Studio Code extensions and create custom AI-powered features.

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- VS Code Extension Generator
- Basic knowledge of TypeScript/JavaScript

### Installation

1. **Install VS Code Extension Generator:**
```bash
npm install -g yo generator-code
```

2. **Create New Extension:**
```bash
yo code
```

3. **Follow the prompts** to set up your extension

## AegisCode-Specific APIs

AegisCode extends VS Code's API with additional capabilities for AI integration and agentic features.

### AI Model Integration

```typescript
import * as vscode from 'vscode';
import { AegisCodeAPI } from 'aegiscode-api';

export function activate(context: vscode.ExtensionContext) {
    const aegisAPI = new AegisCodeAPI();
    
    // Get available AI models
    const models = await aegisAPI.getAvailableModels();
    
    // Use AI for code generation
    const generatedCode = await aegisAPI.generateCode({
        prompt: "Create a React component",
        model: "gpt-4",
        context: editor.document.getText()
    });
}
```

### Agentic Features

```typescript
// AI-powered code planning
const plan = await aegisAPI.createCodePlan({
    description: "Build a todo app",
    framework: "React",
    features: ["CRUD operations", "local storage"]
});

// AI code refactoring
const refactored = await aegisAPI.refactorCode({
    code: editor.document.getText(),
    goal: "Improve performance",
    model: "claude-3"
});
```

### Sandboxed Execution

```typescript
// Execute code in secure sandbox
const result = await aegisAPI.executeInSandbox({
    code: "console.log('Hello World')",
    language: "javascript",
    timeout: 5000
});
```

## Extension Structure

### Basic Extension

```typescript
// src/extension.ts
import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    console.log('AegisCode extension is now active!');
    
    // Register commands
    const disposable = vscode.commands.registerCommand(
        'aegiscode.helloWorld', 
        () => {
            vscode.window.showInformationMessage('Hello from AegisCode!');
        }
    );
    
    context.subscriptions.push(disposable);
}

export function deactivate() {}
```

### Package.json Configuration

```json
{
    "name": "aegiscode-extension",
    "displayName": "AegisCode Extension",
    "description": "Custom extension for AegisCode",
    "version": "0.0.1",
    "engines": {
        "vscode": "^1.74.0",
        "aegiscode": "^1.0.0"
    },
    "categories": ["Other"],
    "activationEvents": [],
    "main": "./out/extension.js",
    "contributes": {
        "commands": [
            {
                "command": "aegiscode.helloWorld",
                "title": "Hello World"
            }
        ]
    },
    "scripts": {
        "vscode:prepublish": "npm run compile",
        "compile": "tsc -p ./",
        "watch": "tsc -watch -p ./"
    },
    "devDependencies": {
        "@types/vscode": "^1.74.0",
        "@types/node": "16.x",
        "typescript": "^4.9.4"
    }
}
```

## Development Workflow

### 1. Development

```bash
# Watch for changes
npm run watch

# Test in AegisCode
# Press F5 to open Extension Development Host
```

### 2. Testing

```bash
# Run tests
npm test

# Lint code
npm run lint
```

### 3. Packaging

```bash
# Install vsce
npm install -g vsce

# Package extension
vsce package
```

### 4. Installation

```bash
# Install locally
code --install-extension your-extension.vsix

# Or use AegisCode's extension manager
```

## Best Practices

### Security

- **Validate Input**: Always validate user input before processing
- **Sandbox Usage**: Use sandboxed execution for untrusted code
- **Permission Model**: Request minimal required permissions

### Performance

- **Lazy Loading**: Load resources only when needed
- **Efficient APIs**: Use AegisCode's optimized APIs
- **Memory Management**: Properly dispose of resources

### User Experience

- **Clear Commands**: Use descriptive command names
- **Progress Indicators**: Show progress for long operations
- **Error Handling**: Provide helpful error messages

## Publishing

### AegisCode Marketplace

1. **Prepare Extension**: Ensure it follows guidelines
2. **Submit for Review**: Upload to marketplace
3. **Maintain**: Keep extension updated

### Direct Distribution

1. **Package Extension**: Create `.vsix` file
2. **Share**: Distribute via GitHub releases
3. **Documentation**: Provide installation instructions

## Examples

### AI Code Assistant

```typescript
export function activate(context: vscode.ExtensionContext) {
    const aiAssistant = vscode.commands.registerCommand(
        'aegiscode.aiAssistant',
        async () => {
            const editor = vscode.window.activeTextEditor;
            if (!editor) return;
            
            const selectedText = editor.document.getText(editor.selection);
            const suggestion = await aegisAPI.getCodeSuggestion(selectedText);
            
            editor.edit(editBuilder => {
                editBuilder.replace(editor.selection, suggestion);
            });
        }
    );
    
    context.subscriptions.push(aiAssistant);
}
```

### Project Scaffolder

```typescript
export function activate(context: vscode.ExtensionContext) {
    const scaffolder = vscode.commands.registerCommand(
        'aegiscode.scaffoldProject',
        async () => {
            const projectType = await vscode.window.showQuickPick([
                'React App',
                'Node.js API',
                'Python Flask',
                'Vue.js App'
            ]);
            
            if (projectType) {
                const scaffold = await aegisAPI.scaffoldProject({
                    type: projectType,
                    features: ['testing', 'linting', 'docker']
                });
                
                // Create project structure
                await createProjectFiles(scaffold);
            }
        }
    );
    
    context.subscriptions.push(scaffolder);
}
```

## Resources

- **VS Code Extension API**: [Documentation](https://code.visualstudio.com/api)
- **AegisCode API**: [Documentation](docs/api-reference.md)
- **Examples**: [GitHub Repository](https://github.com/[YOUR_USERNAME]/AegisCode/tree/main/src/extensions)
- **Community**: [Discussions](https://github.com/[YOUR_USERNAME]/AegisCode/discussions)
