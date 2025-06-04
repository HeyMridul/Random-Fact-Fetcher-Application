import React, { useState } from 'react';
import { InfoIcon } from 'lucide-react';
import { apiInfoText } from '../services/apiService';

const ApiInfo: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="absolute bottom-4 right-4">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="bg-white p-2 rounded-full shadow-md hover:bg-gray-50 transition-colors"
        aria-label="API Information"
      >
        <InfoIcon className="h-5 w-5 text-gray-600" />
      </button>
      
      {isOpen && (
        <div className="absolute bottom-12 right-0 bg-white p-4 rounded-lg shadow-lg w-72 text-sm text-gray-700 leading-relaxed">
          <h3 className="font-semibold mb-2">API Information</h3>
          <p className="whitespace-pre-line">{apiInfoText}</p>
          <button 
            onClick={() => setIsOpen(false)}
            className="mt-2 text-indigo-600 hover:text-indigo-800"
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default ApiInfo;