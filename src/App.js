import coruja from './Coruja-buraqueira.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Aprendendo React</h1>
      <img alt='Coruja' src={coruja}></img>

      <pre>
      A coruja é simbolo da sabedoria por influência da mitologia grega, tanto que Atena, deusa da guerra
      e da sabedoria, tinha uma coruja como mascote. 
      </pre>
    </div>
  );
}

export default App;
