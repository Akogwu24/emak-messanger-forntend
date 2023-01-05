import { useEffect } from 'react';
import './App.css';

function App() {
  const fecthData = async () => {
    const res = await fetch('http://localhost:8080', {
      method: 'GET',
    });
    const data = await res.json();
    console.log('data', data);
  };

  useEffect(() => {
    fecthData();
  });
  return (
    <div className='App'>
      <h1>Emak Messneher</h1>
    </div>
  );
}

export default App;
