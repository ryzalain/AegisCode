import React from 'react';

const Extensions: React.FC = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-white mb-6">Extensions</h1>
      
      <div className="space-y-6">
        <div className="card p-6">
          <h3 className="text-lg font-semibold text-white mb-4">Installed Extensions</h3>
          <p className="text-gray-400 mb-4">Manage your installed extensions</p>
          <div className="text-sm text-gray-400">
            No extensions installed yet. Browse the marketplace to get started.
          </div>
        </div>
        
        <div className="card p-6">
          <h3 className="text-lg font-semibold text-white mb-4">Extension Marketplace</h3>
          <p className="text-gray-400 mb-4">Discover and install new extensions</p>
          <div className="space-y-3">
            <button className="w-full btn-primary">Browse Marketplace</button>
            <button className="w-full btn-secondary">Install from .vsix</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Extensions;
