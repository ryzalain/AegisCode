# AegisCode: The Ultimate Self-Hosted AI Code Editor

![AegisCode Banner](docs/assets/banner.png)

AegisCode is a next-generation, self-hosted AI code editor and compiler that empowers developers with the latest in open-source and premium AI models. Designed for security, extensibility, and creativity, AegisCode is your all-in-one platform for smart, agentic code editing, planning, and building.

---

## ✨ Features

- **Self-Hosted & Secure:** Your code and data never leave your environment.
- **Multi-Model Support:** Seamlessly use multiple free open-source cloud models (e.g., [Ollama](https://ollama.com/), [OpenHermes](https://huggingface.co/openhermes), [Llama.cpp](https://github.com/ggerganov/llama.cpp)), and connect your own premium models (OpenAI, Anthropic, Gemini, etc.).
- **Agentic AI:** Smart agentic code building, planning, and thinking—let AegisCode plan, write, and refactor code for you.
- **Automatic Model Selection:** Optional auto-agent chooses the best available LLM for your task.
- **.vsix Extension Support:** Extend functionality with Visual Studio Code extensions.
- **Sleek, Intuitive UI/UX:** Beautiful, modern interface designed for productivity and inspiration.
- **Vibe Coding:** Let the AI help you code by mood, style, or project type.
- **Project Planning:** AI-powered project scaffolding, roadmap generation, and task breakdown.
- **Secure by Design:** Sandboxed execution, encrypted storage, and user privacy at the core.

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/[YOUR_USERNAME]/AegisCode.git
cd AegisCode
```

### 2. Install Dependencies

```bash
# Backend
cd src/backend
npm install

# Frontend
cd ../frontend
npm install
```

### 3. Configure Environment

Copy `.env.example` to `.env` and fill in your configuration (API keys, model endpoints, etc.).

### 4. Run the Application

```bash
# In one terminal
cd src/backend
npm start

# In another terminal
cd src/frontend
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to get started!

---

## 🧠 Model Integration

AegisCode supports:

- **Open-Source Models:** Ollama, Llama.cpp, HuggingFace Transformers, etc.
- **Premium Models:** OpenAI, Anthropic, Gemini, and more via API keys.
- **Multi-Model Orchestration:** Use several models in parallel or let the agent auto-select.

See [docs/model_integration.md](docs/model_integration.md) for detailed setup.

---

## 🛡️ Security

- **Sandboxed Execution:** All code runs in isolated containers.
- **Encrypted Storage:** User data and code are encrypted at rest.
- **Zero Telemetry:** No data leaves your server unless you enable it.

See [docs/security.md](docs/security.md) for more.

---

## 🧩 Extensions

AegisCode supports .vsix extensions for limitless customization.

- Install from the Extensions Marketplace or sideload your own.
- See [docs/extension_dev_guide.md](docs/extension_dev_guide.md) to build your own.

---

## 💡 Unique Features

- **Agentic Code Planning:** AI helps you break down and plan projects.
- **Agentic Code Building:** AI writes, refactors, and tests code with minimal input.
- **Agentic Thinking:** AI can brainstorm, debug, and suggest improvements.
- **Vibe Coding:** Code by mood, style, or inspiration.
- **Multi-Model Collaboration:** Use different models for different tasks in the same project.

---

## 📚 Documentation

- [Getting Started](docs/getting_started.md)
- [Model Integration](docs/model_integration.md)
- [Extension Development](docs/extension_dev_guide.md)
- [Security](docs/security.md)

---

## 🤝 Contributing

We welcome contributions! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

---

## 📄 License

[MIT License](LICENSE)

---

## 🌟 Join the Community

- [Discussions](https://github.com/[YOUR_USERNAME]/AegisCode/discussions)
- [Issues](https://github.com/[YOUR_USERNAME]/AegisCode/issues)
- [Twitter](https://twitter.com/[YOUR_PROJECT])

---

## Screenshots

![Editor Screenshot](docs/assets/editor.png)
![Agentic Planning](docs/assets/agentic_planning.png)
