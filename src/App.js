import './App.css';
import React, { useState } from 'react'
import Home from './assets/pages/home/Home';
//import Experience from './assets/pages/experience/Experience';
import About from './assets/pages/about/About';

function App() {
  const [page, setPage] = useState('Home');

  return (
    <div className="App">
      <header className="header">
        <div className="pageButtons">
          <button onClick={ () => setPage('Home') }>Home</button>
          {/*<button onClick={ () => setPage('Experience') }>Experience</button>*/}
          <button onClick={ () => setPage('About') }>About Me</button>
          <button onClick={ () => window.open("https://docs.google.com/document/d/1jk5e8JrAq5B7_BRsoqBLWX73XUXPC9FK/edit?usp=drive_link&ouid=112853903530091484741&rtpof=true&sd=true", "_blank", "noreferrer") }>Resume</button>
        </div>
      </header>
      <div>
        { page === 'Home' && <Home/> }
        {/* page === 'Experience' && <Experience/> */}
        { page === 'About' && <About/> }
      </div>
    </div>
  );
}

export default App;
