import React from 'react';

const Settings: React.FC = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-white mb-6">Settings</h1>
      
      <div className="space-y-6">
        <div className="card p-6">
          <h3 className="text-lg font-semibold text-white mb-4">AI Models</h3>
          <p className="text-gray-400 mb-4">Configure your AI model preferences</p>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-white">OpenAI GPT-4</span>
              <button className="btn-secondary text-sm">Configure</button>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-white">Anthropic Claude</span>
              <button className="btn-secondary text-sm">Configure</button>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-white">Ollama (Local)</span>
              <button className="btn-secondary text-sm">Configure</button>
            </div>
          </div>
        </div>
        
        <div className="card p-6">
          <h3 className="text-lg font-semibold text-white mb-4">Security</h3>
          <p className="text-gray-400 mb-4">Manage security and privacy settings</p>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-white">Enable Telemetry</span>
              <input type="checkbox" className="rounded" />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-white">Sandbox Execution</span>
              <input type="checkbox" className="rounded" defaultChecked />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
