import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState([]);
  const saveEmail = () => {}

  return (
    <div className="App">
    <input onChange={(e)=> setData(e.target.value)}></input>
    <button onClick={saveEmail}>Subscribe</button>
    </div>
  );
}

export default App;
