import React from 'react';
import { Code, Shield, Zap, Puzzle } from 'lucide-react';

const Dashboard: React.FC = () => {
  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Welcome to AegisCode</h1>
        <p className="text-gray-400">Your AI-powered development environment</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="card p-6">
          <div className="flex items-center space-x-3 mb-3">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <Code className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-white">AI Code Editor</h3>
          </div>
          <p className="text-gray-400 text-sm">Smart code completion and generation powered by multiple AI models.</p>
        </div>
        
        <div className="card p-6">
          <div className="flex items-center space-x-3 mb-3">
            <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-white">Secure & Private</h3>
          </div>
          <p className="text-gray-400 text-sm">Your code never leaves your environment. Complete data sovereignty.</p>
        </div>
        
        <div className="card p-6">
          <div className="flex items-center space-x-3 mb-3">
            <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-white">Agentic AI</h3>
          </div>
          <p className="text-gray-400 text-sm">AI agents that plan, build, and refactor code with minimal input.</p>
        </div>
        
        <div className="card p-6">
          <div className="flex items-center space-x-3 mb-3">
            <div className="w-10 h-10 bg-orange-600 rounded-lg flex items-center justify-center">
              <Puzzle className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-white">Extensions</h3>
          </div>
          <p className="text-gray-400 text-sm">Full VS Code extension compatibility plus AI-powered features.</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="card p-6">
          <h3 className="text-lg font-semibold text-white mb-4">Quick Start</h3>
          <div className="space-y-3">
            <button className="w-full btn-primary">Create New Project</button>
            <button className="w-full btn-secondary">Open Existing Project</button>
            <button className="w-full btn-secondary">Browse Templates</button>
          </div>
        </div>
        
        <div className="card p-6">
          <h3 className="text-lg font-semibold text-white mb-4">Recent Activity</h3>
          <div className="space-y-2 text-sm text-gray-400">
            <p>• No recent projects</p>
            <p>• Start by creating a new project</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
