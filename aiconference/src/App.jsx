// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import Comitte from './comitte'
// import ThemeSection from './Theme/theme.jsx'
// import TopicsSection from './Topics/Topics.jsx'
// import CallForPapers from './CallForPaper/CallForPaper.jsx'
// import Sponsor from './Sponsor.jsx'
// import VenueContactSection from './VenueContactSection.jsx'
// import Footer from './Footer.jsx'
// import About from './reg-about/about.jsx'
// import Reg from './reg-about/reg.jsx'
// import WelcomeCardSection from './cbeplaces.jsx'
// import MainContent from './components/MainContent.jsx'
// import {
//   AppContainer,
//   InfoSection,
//   InfoContent,
//   CollegeTitle,
//   Address,
//   ConsortiumTitle,
//   SliderContainer,
//   Title,
//   Line
// } from './components/App.styles.jsx';

// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <>
//     <div className="mainctnt">
//       <MainContent/>
//     </div>
//     <div style={{ color: '#FFFFFF' }}>
//       <About/>
//       <Comitte/>
//       <CallForPapers/>
//       <TopicsSection/>
//       <ThemeSection />
//       <Reg/>
//       <VenueContactSection/>
//       <Sponsor/>
//       <WelcomeCardSection/>
//       <Footer/>
//     </div>
//     </>
//   );
// }


// export default App;


import { useState } from 'react';
import './App.css';
import Navbar from './Navbar/Navbar.jsx';

import Comitte from './comitte';
import ThemeSection from './Theme/theme.jsx';
import TopicsSection from './Topics/Topics.jsx';
import CallForPapers from './CallForPaper/CallForPaper.jsx';
import Sponsor from './Sponsor.jsx';
import VenueContactSection from './VenueContactSection.jsx';
import Footer from './Footer.jsx';
import About from './reg-about/about.jsx';
import Reg from './reg-about/reg.jsx';
import WelcomeCardSection from './cbeplaces.jsx';
import MainContent from './components/MainContent.jsx';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />

      <div id="main-content" className="mainctnt">
        <MainContent />
      </div>

      <div style={{ color: '#FFFFFF' }}>
        <div id="about"><About /></div>
        <div id="committee"><Comitte /></div>
        <div id="cfp"><CallForPapers /></div>
        <div id="topics"><TopicsSection /></div>
        <div id="theme"><ThemeSection /></div>
        <div id="registration"><Reg /></div>
        <div id="venue-contact"><VenueContactSection /></div>
        <div id="sponsors"><Sponsor /></div>
        <div id="welcome"><WelcomeCardSection /></div>
        <Footer/>
      </div>
    </>
  );
}

export default App;
