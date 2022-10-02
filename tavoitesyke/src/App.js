import './App.css';
import { useState } from 'react';

function App() {
  const [age, setAge] = useState(0);
  const [upper, setUpper] = useState(0);
  const [lower, setLower] = useState(0);

  function calculate() {
    setUpper((220 - age) * 0.85);
    setLower((220 - age) * 0.65);
  }

  return (
    <div className="App">
      <h3>Heart rate limits calculator</h3>
      <form>
        <div>
          <label>Age</label>
        </div>
        <div>
          <input type="number" value={age} onChange={e => setAge(e.target.value)} />
        </div>
        <div>
          <label>Heart rate limits</label>
        </div>
        <div>
          <output id="box">{lower.toFixed(0)}<label> - </label>{upper.toFixed(0)}</output>
        </div>
        <button type="button" onClick={calculate}>Calculate</button>
      </form>
    </div>
  );
}

export default App;
