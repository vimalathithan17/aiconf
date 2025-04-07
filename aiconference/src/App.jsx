import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Comitte from './comitte'

function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={{
      maxWidth: '100%',
      padding: '10px',
      margin: '0 auto',
      fontFamily: 'Arial, sans-serif',
    }}>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 style={{ fontSize: '1.5em', textAlign: 'center' }}>Vite + React</h1>
      <div className="card" style={{
        textAlign: 'center',
        margin: '20px auto',
        maxWidth: '300px',
      }}>
        <button onClick={() => setCount((count) => count + 1)} style={{
          padding: '10px 20px',
          fontSize: '1em',
          borderRadius: '5px',
          border: 'none',
          backgroundColor: '#004AAD',
          color: '#FFFFFF',
          cursor: 'pointer',
        }}>
          count is {count}
        </button>
        <p style={{ fontSize: '0.9em', marginTop: '10px' }}>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs" style={{
        fontSize: '0.8em',
        textAlign: 'center',
        margin: '10px 0',
      }}>
        Click on the Vite and React logos to learn more
      </p>
      <Comitte />
    </div>
  );
}

export default App;
