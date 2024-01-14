import React, { useEffect } from 'react'
import gsap from 'gsap';
import './About.css'
import BOTW_Logo from '../../images/BOTW_Logo.png';
import OuterWilds_Logo from '../../images/Outer_Wilds_Logo.png';
import PokemonBW2_Logo from '../../images/Pokemon_BW2_Logo.png';
import RoR2_Logo from '../../images/RoR_2_Logo.png';
import Satisfactory_Logo from '../../images/Satisfactory_Logo.png';
import Portal2_Logo from '../../images/Portal_2_Logo.png';
import Picture from '../../images/Pic_Placeholder.png';

function About() {

  useEffect(() => {
    var tl = gsap.timeline();
    tl.fromTo(".gameLogo-1", { x: -50, opacity: 0 }, { x: 0, opacity: 1, duration: 1 });
    tl.fromTo(".gameLogo-2", { y: -50, opacity: 0 }, { y: 0, opacity: 1, duration: 1 }, "-=0.7");
    tl.fromTo(".gameLogo-3", { x: 50, opacity: 0 }, { x: 0, opacity: 1, duration: 1 }, "-=0.7");
    tl.fromTo(".gameLogo-4", { x: -50, opacity: 0 }, { x: 0, opacity: 1, duration: 1 }, "-=0.7");
    tl.fromTo(".gameLogo-5", { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1 }, "-=0.7");
    tl.fromTo(".gameLogo-6", { x: 50, opacity: 0 }, { x: 0, opacity: 1, duration: 1 }, "-=0.7");
  }, [])

  return (
    <div style={{ minHeight: '90vh' }}>
      <div className='textBlock'>
        <img src={Picture} alt='Zelda Breath of the Wild logo' style={{ float: 'left', maxHeight: '200px', margin: '20px 20px 20px 0px' }}/>
        <p>
          My name is Lucas Frederico Piquet Carneiro Magalhaes. I've studied programming 
          and enjoyed video games through all of my life. My dream is to work on video games that people can 
          enjoy as much as I enjoyed my favorites. So I specialized in game programming to work on 
          the industry that brought so much joy to my life.
        </p>
        <p>
          Here are some of my favorite games:
        </p>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
          <img src={BOTW_Logo} alt='Zelda Breath of the Wild logo' className='gameLogo-1'/>
          <img src={OuterWilds_Logo} alt='Outer Wilds logo' className='gameLogo-2'/>
          <img src={PokemonBW2_Logo} alt='Pokémon Black & White 2 logo' className='gameLogo-3'/>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', marginBottom: '20px' }}>
          <img src={RoR2_Logo} alt='Risk of Rain 2 logo' className='gameLogo-4'/>
          <img src={Satisfactory_Logo} alt='Satisfactory logo' className='gameLogo-5'/>
          <img src={Portal2_Logo} alt='Portal 2 logo' className='gameLogo-6'/>
        </div>
      </div>
    </div>
  );
}

export default About;