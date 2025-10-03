# Extension Development Guide

AegisCode supports .vsix extensions for deep customization.

## Getting Started

- Install [VS Code Extension Generator](https://code.visualstudio.com/api/get-started/your-first-extension)
- Build your extension as you would for VS Code
- Install via the Extensions panel or CLI

## APIs

AegisCode exposes additional APIs for agentic features and model orchestration.

## Publishing

- Submit your extension to the AegisCode Marketplace
- Or share your .vsix file directly

## Example

```typescript
// src/extension.ts
import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
  vscode.window.showInformationMessage('Hello from AegisCode Extension!');
}
```
