import './App.css';
import React, { useState } from 'react'
import Home from './assets/pages/home/Home';
import Experience from './assets/pages/experience/Experience';
import About from './assets/pages/About/About';

function App() {
  const [page, setPage] = useState('Home');

  return (
    <div className="App">
      <header className="header">
        {/*<img class="bonezone" src="https://cdn.betterttv.net/emote/6172bd1f78e76c144f05de9c/3x.webp" alt="BONEZONE"/>
        <p>
          Look at him go
        </p>*/}
        <div className="pageButtons">
          <button onClick={ () => setPage('Home') }>Home</button>
          <button onClick={ () => setPage('Experience') }>Experience</button>
          <button onClick={ () => setPage('About') }>About Me</button>
        </div>
      </header>
      <body className='body'>
        { page === 'Home' && <Home/> }
        { page === 'Experience' && <Experience/> }
        { page === 'About' && <About/> }
      </body>
    </div>
  );
}

export default App;
