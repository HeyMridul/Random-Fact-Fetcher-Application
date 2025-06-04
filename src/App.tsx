import { useState } from 'react';
import FactCard from './components/FactCard';
import FetchButton from './components/FetchButton';
import ApiInfo from './components/ApiInfo';
import { fetchRandomFact } from './services/apiService';

function App() {
  const [fact, setFact] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleFetchFact = async () => {
    setIsLoading(true);
    setError(null);
    
    try {
      const newFact = await fetchRandomFact();
      setFact(newFact);
    } catch (err) {
      setError((err as Error).message || 'Something went wrong');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 flex flex-col items-center justify-center p-6 relative">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-indigo-800 mb-2">Random Facts Generator</h1>
        <p className="text-gray-600">Click the button to discover something interesting about cats!</p>
      </div>

      <FactCard fact={fact} isLoading={isLoading} error={error} />
      
      <FetchButton onClick={handleFetchFact} isLoading={isLoading} />
      
      <ApiInfo />
    </div>
  );
}

export default App;