import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useSocket } from './hooks/useSocket';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Editor from './components/Editor';
import Dashboard from './pages/Dashboard';
import Settings from './pages/Settings';
import Extensions from './pages/Extensions';

function App() {
  const { socket, isConnected } = useSocket();

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      
      <div className="flex h-screen pt-16">
        <Sidebar />
        
        <main className="flex-1 overflow-hidden">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/editor" element={<Editor socket={socket} />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/extensions" element={<Extensions />} />
          </Routes>
        </main>
      </div>
      
      {/* Connection Status Indicator */}
      <div className={`fixed bottom-4 right-4 px-3 py-1 rounded-full text-xs ${
        isConnected ? 'bg-green-600' : 'bg-red-600'
      }`}>
        {isConnected ? 'Connected' : 'Disconnected'}
      </div>
    </div>
  );
}

export default App;
