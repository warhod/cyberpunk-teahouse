import { useState } from 'react'
import { Route, Switch } from 'react-router-dom'
import quotes from './../../quotes.json'
import './App.css'

const App: React.FC = () => {
  const [randomQuote, setRandomQuote] = useState<string>('');
  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setRandomQuote(quotes[randomIndex].quote);
  };

  const Home: React.FC = () => <div className="App-content">
    <button className="glow" onClick={getRandomQuote}>Tease Me!</button>
    {randomQuote && <p className="scanlines">{randomQuote}</p>}
  </div>;

  const Human: React.FC = () => <div className="App-content">
    {randomQuote && <p className="scanlines">{randomQuote}</p>}
  </div>;

  return (
    <div>
      <div className="App">
        <div className="App-header">        
          <h1 className='glow glitch layers'><span>AI 発生器</span></h1>
        </div>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/human" component={Human} />
        </Switch>
        <div className="environment"></div>
      </div>
    </div>
  );
};

export default App
