import React, { useEffect } from 'react'
import gsap from 'gsap';
import Earth from './Earth';
import './Home.css'

function Home() {

  useEffect(() => {
    var tl = gsap.timeline();
    tl.fromTo(".name", { y: -50, opacity: 0 }, { y: 0, opacity: 1, duration: 1 });
    tl.fromTo(".smtg", { y: -50, opacity: 0 }, { y: 0, opacity: 1, duration: 1 }, "-=0.5");
    tl.fromTo(".container", { x: 100, opacity: 0 }, { x: 0, opacity: 1, duration: 1 }, "-=0.5"); // for Earth
  }, [])

  return (
    <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
        <div className='titles' style={{ width: '50%', paddingLeft: '5vw' }}>
            <h1 class='name'>Lucas Magalhaes</h1>
            <h2 class='smtg'>Hello! I'm a programmer working on the game industry</h2>
        </div>
        <div style={{ width: '50%', display: 'flex', justifyContent: 'flex-end', alignSelf: 'flex-end' }}>
            <Earth />
        </div>
    </div>
  );
}

export default Home;