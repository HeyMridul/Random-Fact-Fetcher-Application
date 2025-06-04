// List of free public APIs that return random facts



const APIs = [
  {
    name: 'Cat Facts',
    url: 'https://catfact.ninja/fact',
    extractFact: (data) => data.fact
  },
  {
    name: 'Dog Facts',
    url: 'https://dog-api.kinduff.com/api/facts',
    extractFact: (data) => data.facts[0]
  },
  {
    name: 'Number Facts',
    url: 'http://numbersapi.com/random',
    extractFact: (data) => data 
  },
  {
    name: 'Random Facts',
    url: 'https://uselessfacts.jsph.pl/random.json?language=en',
    extractFact: (data) => data.text
  }
];

const selectedAPI = APIs[0]; // Using Cat API by default

export const fetchRandomFact = async () => {
  try {
    const response = await fetch(selectedAPI.url);
    
    if (selectedAPI.url.includes('numbersapi.com')) {
      return await response.text();
    }
    
    if (!response.ok) {
      throw new Error('Failed to fetch a fact');
    }
    
    const data = await response.json();
    return selectedAPI.extractFact(data);
  } catch (error) {
    console.error('Error fetching fact:', error);
    throw new Error('Failed to fetch a fact. Please try again later.');
  }
};

export const apiInfoText = `
This app uses the ${selectedAPI.name} API (${selectedAPI.url}).
Some other free public APIs for random facts:
- Dog Facts API: https://dog-api.kinduff.com/api/facts
- Number Facts API: http://numbersapi.com/random
- Useless Facts API: https://uselessfacts.jsph.pl/random.json?language=en
`;