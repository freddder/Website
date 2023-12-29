import './App.css';
import React, { useEffect } from 'react'
import gsap from 'gsap';
import Home from './assets/pages/home/Home';

function App() {

  useEffect(() => {
    gsap.to(".bonezone", {
      rotation: 360,
      duration: 3,
      repeat: -1,
      ease: 'none'
    });
  }, [])

  return (
    <div className="App">
      <header className="header">
        {/*<img class="bonezone" src="https://cdn.betterttv.net/emote/6172bd1f78e76c144f05de9c/3x.webp" alt="BONEZONE"/>
        <p>
          Look at him go
        </p>*/}
        <div className="pageButtons">
          <button>Home</button>
          <button>Experience</button>
          <button>About</button>
        </div>
      </header>
      <body className='body'>
        <Home/>
      </body>
    </div>
  );
}

export default App;
