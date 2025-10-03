import React from 'react';
import { Code, Settings, Puzzle, Home } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-800 border-b border-gray-700 px-4 py-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
            <Code className="w-5 h-5 text-white" />
          </div>
          <h1 className="text-xl font-bold text-white">AegisCode</h1>
        </div>
        
        <nav className="flex items-center space-x-4">
          <button className="btn-secondary">
            <Home className="w-4 h-4 mr-2" />
            Dashboard
          </button>
          <button className="btn-secondary">
            <Puzzle className="w-4 h-4 mr-2" />
            Extensions
          </button>
          <button className="btn-secondary">
            <Settings className="w-4 h-4 mr-2" />
            Settings
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
