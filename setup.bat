@echo off
REM AegisCode Setup Script for Windows
REM This script sets up the AegisCode development environment

echo 🚀 Setting up AegisCode...

REM Check if Node.js is installed
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Node.js is not installed. Please install Node.js 18+ first.
    pause
    exit /b 1
)

echo ✅ Node.js detected

REM Check if Docker is installed
docker --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Docker is not installed. Please install Docker first.
    pause
    exit /b 1
)

echo ✅ Docker detected

REM Install root dependencies
echo 📦 Installing root dependencies...
npm install

REM Setup backend
echo 🔧 Setting up backend...
cd src\backend
if not exist package.json (
    npm init -y
    npm install express cors helmet morgan dotenv jsonwebtoken bcryptjs
    npm install -D nodemon @types/node typescript ts-node
)
npm install
cd ..\..

REM Setup frontend
echo 🎨 Setting up frontend...
cd src\frontend
if not exist package.json (
    npm init -y
    npm install react react-dom react-router-dom
    npm install -D @vitejs/plugin-react vite typescript @types/react @types/react-dom
)
npm install
cd ..\..

REM Create environment file
if not exist .env (
    echo 📝 Creating environment file...
    copy .env.example .env
    echo ⚠️  Please edit .env file with your API keys and configuration
)

REM Create assets directory
if not exist docs\assets mkdir docs\assets

echo 🎉 Setup complete!
echo.
echo Next steps:
echo 1. Edit .env file with your API keys
echo 2. Run 'npm run dev' to start development servers
echo 3. Visit http://localhost:3000 to access AegisCode
echo.
echo For production deployment:
echo 1. Run 'docker-compose up -d' to start all services
echo 2. Visit http://localhost:3000
pause
