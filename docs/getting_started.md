# Getting Started with AegisCode

Welcome to AegisCode! This guide will help you set up and start using the most advanced self-hosted AI code editor.

## Prerequisites

- **Node.js** >= 18.x ([Download](https://nodejs.org/))
- **Docker** ([Download](https://www.docker.com/get-started)) - Required for sandboxed code execution
- **Git** ([Download](https://git-scm.com/))
- **(Optional)** API keys for premium AI models (OpenAI, Anthropic, Gemini)

## Quick Start

### 1. Clone the Repository

```bash
git clone https://github.com/[YOUR_USERNAME]/AegisCode.git
cd AegisCode
```

### 2. Run Setup Script

**Linux/macOS:**
```bash
chmod +x setup.sh
./setup.sh
```

**Windows:**
```cmd
setup.bat
```

### 3. Configure Environment

```bash
cp .env.example .env
# Edit .env with your API keys and preferences
```

### 4. Start Development Servers

```bash
npm run dev
```

### 5. Access AegisCode

Open your browser and navigate to [http://localhost:3000](http://localhost:3000)

## Detailed Installation

### Manual Setup

If you prefer manual setup or the automated script fails:

#### Backend Setup
```bash
cd src/backend
npm init -y
npm install express cors helmet morgan dotenv jsonwebtoken bcryptjs
npm install -D nodemon @types/node typescript ts-node
npm install
```

#### Frontend Setup
```bash
cd src/frontend
npm init -y
npm install react react-dom react-router-dom
npm install -D @vitejs/plugin-react vite typescript @types/react @types/react-dom
npm install
```

#### Root Dependencies
```bash
cd ../..
npm install concurrently
```

## First Run

1. **Open AegisCode**: Navigate to [http://localhost:3000](http://localhost:3000)
2. **Create Account**: Set up your user account
3. **Configure AI Models**: Connect your preferred AI models
4. **Start Coding**: Begin using AI-assisted development!

## Configuration

### Environment Variables

Key configuration options in `.env`:

- `OPENAI_API_KEY`: Your OpenAI API key
- `ANTHROPIC_API_KEY`: Your Anthropic API key  
- `GEMINI_API_KEY`: Your Google Gemini API key
- `OLLAMA_BASE_URL`: Local Ollama instance URL
- `JWT_SECRET`: Secret for authentication tokens
- `DATABASE_URL`: PostgreSQL connection string

### AI Model Setup

1. **Open Source Models**: Install [Ollama](https://ollama.com/) for local models
2. **Premium Models**: Add API keys to `.env` file
3. **Model Selection**: Configure auto-selection or manual choice

## Next Steps

- **Explore Extensions**: Browse the Extensions Marketplace
- **Try Agentic Features**: Use AI for code planning and building
- **Customize Workspace**: Personalize your development environment
- **Join Community**: Connect with other AegisCode users

## Troubleshooting

### Common Issues

**Port Already in Use:**
```bash
# Kill processes using ports 3000/3001
lsof -ti:3000 | xargs kill -9
lsof -ti:3001 | xargs kill -9
```

**Docker Not Running:**
```bash
# Start Docker service
sudo systemctl start docker  # Linux
# Or start Docker Desktop on Windows/macOS
```

**Permission Denied:**
```bash
# Fix script permissions
chmod +x setup.sh
```

### Getting Help

- **Documentation**: Check the `docs/` directory
- **Issues**: [GitHub Issues](https://github.com/[YOUR_USERNAME]/AegisCode/issues)
- **Discussions**: [GitHub Discussions](https://github.com/[YOUR_USERNAME]/AegisCode/discussions)
- **FAQ**: See [FAQ.md](../FAQ.md) for common questions
