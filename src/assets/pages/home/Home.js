import React, { useEffect } from 'react'
import gsap from 'gsap';
import Earth from './Earth';
import './Home.css';
import Linkedin_Icon from '../../images/Linkedin.png';
import Github_Icon from '../../images/Github.png';

function Home() {

  useEffect(() => {
    var tl = gsap.timeline();
    tl.fromTo(".name", { y: -50, opacity: 0 }, { y: 0, opacity: 1, duration: 1 });
    tl.fromTo(".greeting", { y: -50, opacity: 0 }, { y: 0, opacity: 1, duration: 1 }, "-=0.5");
    tl.fromTo(".contact", { y: -50, opacity: 0 }, { y: 0, opacity: 1, duration: 1 }, "-=0.5");
    tl.fromTo(".container", { x: 100, opacity: 0 }, { x: 0, opacity: 1, duration: 1 }, "-=0.5"); // for Earth
  }, [])

  return (
    <div style={{ display: 'flex', alignItems: 'center', height: '90vh', overflow: 'hidden' }}>
      <div className='titles' style={{ width: '50%', paddingLeft: '5vw' }}>
        <h1 class='name'>Lucas Magalhaes</h1>
        <h2 class='greeting'>Hello! I'm a programmer working on the game industry</h2>
        <div class='contact' style={{ display: 'flex' }}>
          <a href={'https://www.linkedin.com/in/l-magalhaes/'} target="_blank" rel="noreferrer"><img src={Linkedin_Icon} alt='Linkedin' className='contactIcon'/></a>
          <a href={'https://github.com/freddder'} target="_blank" rel="noreferrer" ><img src={Github_Icon} alt='Github' className='contactIcon'/></a>
          <h2>lucasfredmagalhaes@gmail.com</h2>
        </div>
      </div>
      <div style={{ width: '50%', display: 'flex', justifyContent: 'flex-end', alignSelf: 'flex-end' }}>
        <Earth />
      </div>
    </div>
  );
}

export default Home;