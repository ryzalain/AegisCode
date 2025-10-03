#!/bin/bash

# AegisCode Setup Script
# This script sets up the AegisCode development environment

set -e

echo "🚀 Setting up AegisCode..."

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18+ first."
    exit 1
fi

# Check Node.js version
NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    echo "❌ Node.js version 18+ is required. Current version: $(node -v)"
    exit 1
fi

echo "✅ Node.js $(node -v) detected"

# Check if Docker is installed
if ! command -v docker &> /dev/null; then
    echo "❌ Docker is not installed. Please install Docker first."
    exit 1
fi

echo "✅ Docker $(docker --version) detected"

# Install root dependencies
echo "📦 Installing root dependencies..."
npm install

# Setup backend
echo "🔧 Setting up backend..."
cd src/backend
if [ ! -f package.json ]; then
    npm init -y
    npm install express cors helmet morgan dotenv jsonwebtoken bcryptjs
    npm install -D nodemon @types/node typescript ts-node
fi
npm install
cd ../..

# Setup frontend
echo "🎨 Setting up frontend..."
cd src/frontend
if [ ! -f package.json ]; then
    npm init -y
    npm install react react-dom react-router-dom
    npm install -D @vitejs/plugin-react vite typescript @types/react @types/react-dom
fi
npm install
cd ../..

# Create environment file
if [ ! -f .env ]; then
    echo "📝 Creating environment file..."
    cp .env.example .env
    echo "⚠️  Please edit .env file with your API keys and configuration"
fi

# Create assets directory
mkdir -p docs/assets

echo "🎉 Setup complete!"
echo ""
echo "Next steps:"
echo "1. Edit .env file with your API keys"
echo "2. Run 'npm run dev' to start development servers"
echo "3. Visit http://localhost:3000 to access AegisCode"
echo ""
echo "For production deployment:"
echo "1. Run 'docker-compose up -d' to start all services"
echo "2. Visit http://localhost:3000"
