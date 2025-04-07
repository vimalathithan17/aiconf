import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Comitte from './comitte'
import ThemeSection from './Theme/theme.jsx'
import TopicsSection from './Topics/Topics.jsx'
function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ color: '#FFFFFF' }}>
      <ThemeSection />
      <TopicsSection/>
      <Comitte />
    </div>
  );
}

export default App;
