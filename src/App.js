import './App.css';
import React, { useState } from 'react'
//import Home from './pages/home/Home';
//import Experience from './pages/experience/Experience';
//import About from './pages/about/About';

import Carousel from './pages/Carousel';
import bg from './assets/images/Path_of_Titans_Banner.jpg';
import bg2 from './assets/images/PKM_Banner.png';

const slides = [
  {
    title: 'Title 1',
    background: bg,
  },
  { 
    title: 'Title 2',
    background: bg2,
  },
  { 
    title: 'Title 3',
    background: bg, 
  },
];

function App() {
  const [page, setPage] = useState('Home');

  return (
    <div className="App">
      <header className="header">
        <div className="pageButtons">
          <button onClick={ () => setPage('Home') }>Home</button>
          <button onClick={ () => setPage('Experience') }>Experience</button>
          <button onClick={ () => setPage('About') }>About Me</button>
          <button onClick={ () => window.open("https://docs.google.com/document/d/1jk5e8JrAq5B7_BRsoqBLWX73XUXPC9FK/edit?usp=drive_link&ouid=112853903530091484741&rtpof=true&sd=true", "_blank", "noreferrer") }>Resume</button>
        </div>
      </header>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        {/* page === 'Home' && <Home/> }
        { page === 'Experience' && <Experience/> }
        { page === 'About' && <About/> */}
        <Carousel slides={slides} />
      </div>
    </div>
  );
}

export default App;
