import React from 'react';
import { Loader2 } from 'lucide-react';

const FactCard = ({ fact, isLoading, error }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md min-h-[12rem] flex flex-col justify-center transition-all duration-300 hover:shadow-xl">
      {isLoading ? (
        <div className="flex items-center justify-center h-full">
          <Loader2 className="h-10 w-10 text-indigo-500 animate-spin" />
        </div>
      ) : error ? (
        <div className="text-center text-red-500">
          <p className="font-medium">{error}</p>
          <p className="text-sm mt-2">Please try again later</p>
        </div>
      ) : fact ? (
        <p className="text-gray-700 leading-relaxed text-lg animate-fadeIn">
          {fact}
        </p>
      ) : (
        <p className="text-gray-400 text-center italic">
          Click the button below to get a random fact!
        </p>
      )}
    </div>
  );
};

export default FactCard;