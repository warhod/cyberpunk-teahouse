import { useState } from 'react'
import quotes from './../quotes.json'
import './App.css'

const App: React.FC = () => {
  const [randomQuote, setRandomQuote] = useState<string>('');

  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setRandomQuote(quotes[randomIndex].quote);
  };

  return (
    <div className="App">
      <div className="App-header">        
        <h1 className='glow'>Random Quote Generator</h1>
        <button className="buttonPosition" onClick={getRandomQuote}>Tease Me!</button>
        {randomQuote && <p>{randomQuote}</p>}
        <div className="environment"></div>
      </div>
    </div>
  );
};


export default App
