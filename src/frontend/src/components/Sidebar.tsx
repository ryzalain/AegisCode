import React from 'react';
import { FileText, Folder, Search, Terminal } from 'lucide-react';

const Sidebar: React.FC = () => {
  return (
    <aside className="w-64 bg-gray-800 border-r border-gray-700 p-4">
      <div className="space-y-4">
        {/* File Explorer */}
        <div>
          <h3 className="text-sm font-semibold text-gray-300 mb-2">Explorer</h3>
          <div className="space-y-1">
            <button className="w-full flex items-center space-x-2 px-2 py-1 text-sm text-gray-300 hover:bg-gray-700 rounded">
              <Folder className="w-4 h-4" />
              <span>Projects</span>
            </button>
            <button className="w-full flex items-center space-x-2 px-2 py-1 text-sm text-gray-300 hover:bg-gray-700 rounded">
              <FileText className="w-4 h-4" />
              <span>Recent Files</span>
            </button>
          </div>
        </div>
        
        {/* AI Assistant */}
        <div>
          <h3 className="text-sm font-semibold text-gray-300 mb-2">AI Assistant</h3>
          <div className="space-y-1">
            <button className="w-full flex items-center space-x-2 px-2 py-1 text-sm text-gray-300 hover:bg-gray-700 rounded">
              <Search className="w-4 h-4" />
              <span>Code Search</span>
            </button>
            <button className="w-full flex items-center space-x-2 px-2 py-1 text-sm text-gray-300 hover:bg-gray-700 rounded">
              <Terminal className="w-4 h-4" />
              <span>AI Terminal</span>
            </button>
          </div>
        </div>
        
        {/* Quick Actions */}
        <div>
          <h3 className="text-sm font-semibold text-gray-300 mb-2">Quick Actions</h3>
          <div className="space-y-1">
            <button className="w-full btn-primary text-sm">
              New Project
            </button>
            <button className="w-full btn-secondary text-sm">
              Open File
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
