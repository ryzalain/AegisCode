# Frequently Asked Questions (FAQ)

## General Questions

### What is AegisCode?
AegisCode is a next-generation, self-hosted AI code editor that combines the power of multiple AI models with a secure, extensible development environment. It's designed for developers who want AI assistance while maintaining complete control over their code and data.

### Why choose AegisCode over other AI coding assistants?
- **Complete Privacy**: Your code never leaves your environment
- **Multi-Model Support**: Use multiple AI models simultaneously
- **Extensible**: Full VS Code extension compatibility
- **Self-Hosted**: Complete control over your development environment

## Installation & Setup

### What are the system requirements?
- Node.js 18+ 
- Docker (for sandboxed execution)
- 4GB+ RAM recommended
- 10GB+ free disk space

### How do I get started?
1. Clone the repository
2. Run the setup script (`./setup.sh` or `setup.bat`)
3. Configure your `.env` file with API keys
4. Run `npm run dev`
5. Visit http://localhost:3000

### Do I need API keys?
API keys are optional but recommended for premium models. You can start with free open-source models like Ollama without any API keys.

## AI Models

### Which AI models are supported?
- **Open Source**: Ollama, Llama.cpp, HuggingFace Transformers
- **Premium**: OpenAI GPT, Anthropic Claude, Google Gemini
- **Custom**: Any model with OpenAI-compatible API

### How does multi-model orchestration work?
AegisCode can automatically select the best model for each task, or you can manually choose which model to use. Different models excel at different types of coding tasks.

### Can I use multiple models simultaneously?
Yes! You can run different models in parallel for different tasks, or use them collaboratively for complex projects.

## Security & Privacy

### Is my code secure?
Absolutely. AegisCode is designed with security-first principles:
- All code runs in isolated Docker containers
- Data is encrypted at rest
- No telemetry by default
- Complete local control

### Can I disable telemetry?
Yes, telemetry is disabled by default. You can control this in your environment configuration.

### How does sandboxed execution work?
All code execution happens in isolated Docker containers, preventing any code from affecting your host system.

## Extensions

### Can I use VS Code extensions?
Yes! AegisCode supports full `.vsix` extension compatibility, plus additional APIs for AI-powered features.

### How do I install extensions?
- Use the built-in Extensions Marketplace
- Sideload `.vsix` files directly
- Install from the command line

### Can I develop custom extensions?
Absolutely! See our [Extension Development Guide](docs/extension_dev_guide.md) for detailed instructions.

## Troubleshooting

### The application won't start
1. Check that Node.js 18+ is installed
2. Ensure Docker is running
3. Verify all dependencies are installed
4. Check the logs for specific error messages

### AI models aren't responding
1. Verify API keys are correctly configured
2. Check network connectivity
3. Ensure model endpoints are accessible
4. Review model-specific documentation

### Extensions aren't loading
1. Check extension compatibility
2. Verify extension files aren't corrupted
3. Review extension logs
4. Try reinstalling the extension

### Performance issues
1. Check system resources (RAM, CPU)
2. Optimize Docker container limits
3. Review model configuration
4. Consider using smaller models for development

## Contributing

### How can I contribute?
We welcome contributions! See our [Contributing Guide](CONTRIBUTING.md) for details on:
- Setting up a development environment
- Code style guidelines
- Submitting pull requests
- Reporting issues

### Where can I get help?
- [GitHub Issues](https://github.com/[YOUR_USERNAME]/AegisCode/issues)
- [GitHub Discussions](https://github.com/[YOUR_USERNAME]/AegisCode/discussions)
- Documentation in the `docs/` directory

## Advanced Usage

### Can I customize the AI behavior?
Yes! AegisCode provides extensive customization options:
- Model selection policies
- Custom prompts and templates
- Workflow automation
- Integration with external tools

### How do I deploy in production?
See our deployment documentation for:
- Docker Compose setup
- Environment configuration
- Security hardening
- Performance optimization

### Can I integrate with CI/CD?
Yes! AegisCode provides APIs and webhooks for integration with popular CI/CD platforms.
