import { useEffect } from 'react'
import gsap from 'gsap';
//import Earth from './Earth';
import './Home.css';

import Carousel from './Carousel';

import pot from '../../assets/images/Path_of_Titans_Banner.jpg';
import magik from '../../assets/images/PKM_Banner.png';
import una from '../../assets/images/Unannounced_Banner.png';

import opengl from '../../assets/icons/Opengl_logo.png';
import cpp from '../../assets/icons/cpp_logo.png';
import cs from '../../assets/icons/cs_logo.png';
import unreal from '../../assets/icons/Unreal_logo.png';
import unity from '../../assets/icons/Unity_logo.png';
import steam from '../../assets/icons/Steam_logo.png';

const slides = [
 {
   title: 'Path of Titans',
   background: pot,
   skills: [unreal, cpp]
 },
 { 
   title: 'Project Magik',
   background: magik,
   skills: [opengl, cpp]
 },
 { 
   title: 'Unannouced Project',
   background: una, 
   skills: [unity, cs, steam]
 },
];

function Home() {

  useEffect(() => {
    var tl = gsap.timeline();
    tl.fromTo(".name", { y: -50, opacity: 0 }, { y: 0, opacity: 1, duration: 1 });
    tl.fromTo(".greeting", { y: -50, opacity: 0 }, { y: 0, opacity: 1, duration: 1 }, "-=0.5");
    tl.fromTo(".carousel", { y: -50, opacity: 0 }, { y: 0, opacity: 1, duration: 1 }, "-=0.5");
    //tl.fromTo(".container", { x: 100, opacity: 0 }, { x: 0, opacity: 1, duration: 1 }, "-=0.5"); // for Earth
  }, []);

  return (
    <div className='homeContainer'>
      {/*<div className='earthDiv'>
        <Earth />
      </div>*/}
      <div className='titles'>
        <h1 class='name'>Lucas Magalhaes</h1>
        <h2 class='greeting'>Game Developer, Software Engineer & thing doer</h2>
        {/*<div className='contact'>
          <a href={'https://www.linkedin.com/in/l-magalhaes/'} target="_blank" rel="noreferrer"><img src={Linkedin_Icon} alt='Linkedin' className='contactIcon'/></a>
          <a href={'https://github.com/freddder'} target="_blank" rel="noreferrer" ><img src={Github_Icon} alt='Github' className='contactIcon'/></a>
          <h2>lucasfredmagalhaes@gmail.com</h2>
        </div>*/}
        <Carousel slides={slides}/>
      </div>
    </div>
  );
}

export default Home;