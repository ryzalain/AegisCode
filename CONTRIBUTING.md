# Contributing to AegisCode

Thank you for your interest in contributing to AegisCode! We welcome contributions from developers of all skill levels. This guide will help you get started.

## Code of Conduct

Please read our [Code of Conduct](CODE_OF_CONDUCT.md) before contributing. We are committed to providing a welcoming and inclusive environment for all contributors.

## How to Contribute

### 1. Fork the Repository

1. Click the "Fork" button on the [AegisCode repository](https://github.com/[YOUR_USERNAME]/AegisCode)
2. Clone your fork locally:
   ```bash
   git clone https://github.com/YOUR_USERNAME/AegisCode.git
   cd AegisCode
   ```

### 2. Set Up Development Environment

```bash
# Install dependencies
npm install

# Set up environment
cp .env.example .env
# Edit .env with your configuration

# Start development servers
npm run dev
```

### 3. Create a Feature Branch

```bash
git checkout -b feature/your-feature-name
# or
git checkout -b fix/your-bug-fix
```

### 4. Make Your Changes

- Write clean, readable code
- Follow existing code style and patterns
- Add tests for new functionality
- Update documentation as needed

### 5. Test Your Changes

```bash
# Run tests
npm test

# Run linting
npm run lint

# Test in development
npm run dev
```

### 6. Commit Your Changes

Use clear, descriptive commit messages:

```bash
git add .
git commit -m "feat: add new AI model integration"
# or
git commit -m "fix: resolve authentication bug"
```

### 7. Push and Create Pull Request

```bash
git push origin feature/your-feature-name
```

Then create a pull request on GitHub with:
- Clear description of changes
- Reference to any related issues
- Screenshots (if applicable)

## Development Guidelines

### Code Style

- Use TypeScript for all new code
- Follow ESLint configuration
- Use meaningful variable and function names
- Add JSDoc comments for public APIs

### Testing

- Write unit tests for new features
- Test both success and error cases
- Maintain test coverage above 80%
- Use descriptive test names

### Documentation

- Update README.md for user-facing changes
- Add/update API documentation
- Include code examples
- Update CHANGELOG.md for significant changes

## Types of Contributions

### 🐛 Bug Reports

- Use the bug report template
- Include steps to reproduce
- Provide system information
- Add screenshots if helpful

### ✨ Feature Requests

- Use the feature request template
- Describe the problem you're solving
- Explain your proposed solution
- Consider alternatives

### 📝 Documentation

- Fix typos and grammar
- Improve clarity and structure
- Add missing information
- Translate to other languages

### 🔧 Code Contributions

- Bug fixes
- New features
- Performance improvements
- Refactoring
- Extension development

## Project Structure

```
AegisCode/
├── src/
│   ├── backend/          # Node.js API server
│   ├── frontend/         # React application
│   └── extensions/       # Extension examples
├── docs/                 # Documentation
├── tests/                # Test files
└── scripts/              # Build and utility scripts
```

## Areas Needing Help

- **Backend Development**: API endpoints, AI integration, security
- **Frontend Development**: React components, UI/UX, state management
- **Extension Development**: VS Code extensions, custom APIs
- **Documentation**: Guides, tutorials, API docs
- **Testing**: Unit tests, integration tests, e2e tests
- **DevOps**: Docker, CI/CD, deployment

## Getting Help

- **Discussions**: [GitHub Discussions](https://github.com/[YOUR_USERNAME]/AegisCode/discussions)
- **Issues**: [GitHub Issues](https://github.com/[YOUR_USERNAME]/AegisCode/issues)
- **Discord**: [Community Server](https://discord.gg/aegiscode)
- **Email**: dev@aegiscode.dev

## Recognition

Contributors will be:
- Listed in CONTRIBUTORS.md
- Mentioned in release notes
- Invited to join the core team (for significant contributions)

## License

By contributing to AegisCode, you agree that your contributions will be licensed under the MIT License.

---

Thank you for contributing to AegisCode! 🚀
