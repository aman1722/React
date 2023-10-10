import logo from './logo.svg';
import './App.css';
import {Greetings} from './components/Greetings';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      <h1>Hey</h1>
      <Greetings/>
      <Counter />
    </div>
  );
}

export default App;
