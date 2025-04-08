import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Comitte from './comitte'
import ThemeSection from './Theme/theme.jsx'
import TopicsSection from './Topics/Topics.jsx'
import CallForPapers from './CallForPaper/CallForPaper.jsx'
import Sponsor from './Sponsor.jsx'
import VenueContactSection from './VenueContactSection.jsx'
import Footer from './Footer.jsx'
import About from './reg-about/about.jsx'
import Reg from './reg-about/reg.jsx'
import MainContent from './components/MainContent.jsx'
import {
  AppContainer,
  InfoSection,
  InfoContent,
  CollegeTitle,
  Address,
  ConsortiumTitle,
  SliderContainer,
  Title,
  Line
} from './components/App.styles.jsx';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <div className="mainctnt">
      <MainContent/>
    </div>
    <div style={{ color: '#FFFFFF' }}>
      <About/>
      <Comitte/>
      <CallForPapers/>
      <TopicsSection/>
      <ThemeSection />
      <Reg/>
      <VenueContactSection/>
      <Sponsor/>
      <Footer/>
    </div>
    </>
  );
}


export default App;
