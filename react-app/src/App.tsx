import { useState } from 'react'
import quotes from './../../quotes.json'
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
        <h1 className='glow glitch layers'><span>AI 発生器</span></h1>
        <button className="glow" onClick={getRandomQuote}>Tease Me!</button>
      </div>
      <div className="App-content">
        {randomQuote && <p className="scanlines">{randomQuote}</p>}
      </div>
      <div className="environment"></div>
    </div>
  );
};


export default App
