import './App.css';
import React, { useEffect } from 'react'
import gsap from 'gsap';

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
      <header className="App-header">
      <img class="bonezone" src="https://cdn.betterttv.net/emote/6172bd1f78e76c144f05de9c/3x.webp" alt="BONEZONE"/>
        {/*<img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>*/}
        <p style={{color: 'white', fontFamily: "Ubuntu"}}>
          Look at him go
        </p>
      </header>
    </div>
  );
}

export default App;
