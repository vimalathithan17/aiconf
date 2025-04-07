import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Comitte from './comitte'
import ThemeSection from './Theme/theme.jsx'
import Reg from './reg-about/reg.jsx'
import About from './reg-about/about.jsx'
function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ color: '#FFFFFF' }}>
      <About />
      <ThemeSection />
      <Comitte />
      <Reg />
    </div>
  );
}


export default App;
