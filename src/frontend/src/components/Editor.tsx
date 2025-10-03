import React from 'react';
import { Socket } from 'socket.io-client';

interface EditorProps {
  socket: Socket | null;
}

const Editor: React.FC<EditorProps> = ({ socket }) => {
  const [code, setCode] = React.useState('// Welcome to AegisCode!\n// Start coding with AI assistance...\n\nfunction hello() {\n  console.log("Hello, AegisCode!");\n}');

  const handleCodeChange = (newCode: string) => {
    setCode(newCode);
    // Send code to AI for analysis/suggestions
    if (socket) {
      socket.emit('code-change', { code: newCode });
    }
  };

  return (
    <div className="h-full flex flex-col">
      <div className="bg-gray-800 border-b border-gray-700 px-4 py-2">
        <h2 className="text-lg font-semibold text-white">Code Editor</h2>
        <p className="text-sm text-gray-400">AI-powered development environment</p>
      </div>
      
      <div className="flex-1 p-4">
        <textarea
          value={code}
          onChange={(e) => handleCodeChange(e.target.value)}
          className="w-full h-full code-editor resize-none"
          placeholder="Start coding..."
        />
      </div>
      
      <div className="bg-gray-800 border-t border-gray-700 px-4 py-2">
        <div className="flex items-center justify-between">
          <div className="text-sm text-gray-400">
            Lines: {code.split('\n').length} | Characters: {code.length}
          </div>
          <div className="flex space-x-2">
            <button className="btn-secondary text-sm">Save</button>
            <button className="btn-primary text-sm">Run</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Editor;
