import { useEffect } from 'react'
import gsap from 'gsap';
import Earth from './Earth';
import './Home.css';
import Linkedin_Icon from '../../assets/icons/Linkedin.png';
import Github_Icon from '../../assets/icons/Github.png';

import Carousel from './Carousel';
import bg from '../../assets/images/Path_of_Titans_Banner.jpg';
import bg2 from '../../assets/images/PKM_Banner.png';
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

function Home() {

  useEffect(() => {
    var tl = gsap.timeline();
    tl.fromTo(".name", { y: -50, opacity: 0 }, { y: 0, opacity: 1, duration: 1 });
    tl.fromTo(".greeting", { y: -50, opacity: 0 }, { y: 0, opacity: 1, duration: 1 }, "-=0.5");
    tl.fromTo(".contact", { y: -50, opacity: 0 }, { y: 0, opacity: 1, duration: 1 }, "-=0.5");
    tl.fromTo(".container", { x: 100, opacity: 0 }, { x: 0, opacity: 1, duration: 1 }, "-=0.5"); // for Earth
  }, []);

  return (
    <div className='homeContainer'>
      <div className='earthDiv'>
        <Earth />
      </div>
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