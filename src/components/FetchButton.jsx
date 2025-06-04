import React from 'react';
import { RefreshCw } from 'lucide-react';

const FetchButton = ({ onClick, isLoading }) => {
  return (
    <button
      onClick={onClick}
      disabled={isLoading}
      className="mt-6 px-6 py-3 bg-indigo-600 text-white rounded-full font-medium flex items-center justify-center gap-2 transition-all
        hover:bg-indigo-700 active:scale-95 disabled:bg-indigo-400 disabled:cursor-not-allowed"
    >
      <RefreshCw className={`h-5 w-5 ${isLoading ? 'animate-spin' : ''}`} />
      <span>{isLoading ? 'Loading...' : 'Get Random Fact'}</span>
    </button>
  );
};

export default FetchButton;