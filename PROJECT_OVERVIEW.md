# AegisCode Project Overview

## Project Structure

```
AegisCode/
├── .github/                    # GitHub configuration
│   └── ISSUE_TEMPLATE/         # Issue templates
├── docs/                       # Documentation
│   ├── assets/                 # Images and media
│   ├── getting_started.md      # Getting started guide
│   ├── model_integration.md    # AI model setup guide
│   ├── extension_dev_guide.md  # Extension development
│   └── security.md            # Security documentation
├── src/                        # Source code
│   ├── backend/               # Backend API server
│   ├── frontend/              # React frontend
│   └── extensions/            # Extension examples
├── .env.example               # Environment template
├── .gitignore                 # Git ignore rules
├── docker-compose.yml         # Docker services
├── package.json               # Root package configuration
├── setup.sh                   # Linux/Mac setup script
├── setup.bat                  # Windows setup script
├── README.md                  # Main documentation
├── CONTRIBUTING.md            # Contribution guidelines
└── LICENSE                    # MIT License
```

## Key Features

### 🤖 AI Integration
- **Multi-Model Support**: Ollama, OpenAI, Anthropic, Gemini
- **Agentic AI**: Smart code planning and building
- **Auto-Selection**: Automatic model selection for tasks

### 🔒 Security
- **Self-Hosted**: Your code never leaves your environment
- **Sandboxed Execution**: Docker containers for code execution
- **Encrypted Storage**: All data encrypted at rest

### 🧩 Extensibility
- **VS Code Extensions**: Full .vsix support
- **Custom APIs**: Additional agentic features
- **Marketplace**: Extension sharing platform

### 🎨 User Experience
- **Modern UI**: Beautiful, intuitive interface
- **Vibe Coding**: Code by mood and style
- **Project Planning**: AI-powered scaffolding

## Technology Stack

### Backend
- **Node.js**: Runtime environment
- **Express**: Web framework
- **PostgreSQL**: Database
- **Redis**: Caching and sessions
- **Docker**: Containerization

### Frontend
- **React**: UI framework
- **TypeScript**: Type safety
- **Vite**: Build tool
- **React Router**: Navigation

### AI Models
- **Ollama**: Local model hosting
- **OpenAI API**: GPT models
- **Anthropic API**: Claude models
- **Google Gemini**: Gemini models

## Getting Started

1. **Clone the repository**
2. **Run setup script**: `./setup.sh` (Linux/Mac) or `setup.bat` (Windows)
3. **Configure environment**: Edit `.env` file
4. **Start development**: `npm run dev`
5. **Access application**: http://localhost:3000

## Development

### Prerequisites
- Node.js 18+
- Docker
- Git

### Scripts
- `npm run dev`: Start development servers
- `npm run build`: Build for production
- `npm run test`: Run tests
- `npm run lint`: Lint code

### Docker
- `docker-compose up -d`: Start all services
- `docker-compose down`: Stop all services

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

See [CONTRIBUTING.md](CONTRIBUTING.md) for detailed guidelines.

## License

This project is licensed under the MIT License - see [LICENSE](LICENSE) file for details.

## Support

- **Issues**: [GitHub Issues](https://github.com/[YOUR_USERNAME]/AegisCode/issues)
- **Discussions**: [GitHub Discussions](https://github.com/[YOUR_USERNAME]/AegisCode/discussions)
- **Documentation**: [docs/](docs/)

---

*Built with ❤️ by the AegisCode team*
