import { useState } from 'react'
import { Route, Switch } from 'react-router-dom'
import quotes from './quotes.json'

import './App.css'
import HumanTest from './HumanTest.tsx'

const App: React.FC = () => {
  const [randomQuote, setRandomQuote] = useState<string>('');
  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setRandomQuote(quotes[randomIndex].quote);
  };

  const Home: React.FC = () => 
  <div className={`App-content ${randomQuote ? 'environment-dark' : ''}`}>
    <div className="App-header">
        <h1 className='glow glitch layers'><span>AI 発生器</span></h1>
    </div>
    {randomQuote && <div className="quote">{randomQuote}</div>}
    {!randomQuote && <div className="environment"></div>}
    <button className="glow" onClick={getRandomQuote}>
      {randomQuote ? 'Tease Me More!' : 'Tease Me!'}
    </button>
  </div>;

  return (
    <div>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/human" component={HumanTest} />
        </Switch>
      </div>
    </div>
  );
};

export default App
