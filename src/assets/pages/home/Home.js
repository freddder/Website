import React, { useEffect } from 'react'
import gsap from 'gsap';
import Earth from './Earth';
import './Home.css'

function Home() {

  useEffect(() => {
    //gsap.to(".bonezone", {
    //  rotation: 360,
    //  duration: 3,
    //  repeat: -1,
    //  ease: 'none'
    //});
  }, [])

  return (
    <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
        <div className='titles' style={{ width: '50%', paddingLeft: '5vw' }}>
            <h1>Lucas Magalhaes</h1>
            <h2>Game Programmer</h2>
        </div>
        <div style={{ width: '50%', display: 'flex', justifyContent: 'flex-end', alignSelf: 'flex-end' }}>
            <Earth />
        </div>
    </div>
  );
}

export default Home;