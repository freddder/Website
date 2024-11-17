import React, { useEffect } from 'react';
import gsap from 'gsap';
import './About.css';
//import Picture from '../../images/My_Picture.jpg';
import LGBS from '../../images/TitleCard.png';

function About() {

  useEffect(() => {
    var tl = gsap.timeline();
    tl.fromTo(".textBlock", { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1 });
    tl.fromTo(".project-1", { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1 }, "-=0.4");
    tl.fromTo(".project-2", { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1 }, "-=0.4");
  }, [])

  return (
    <div style={{ minHeight: '90vh' }}>
      <div className='textBlock'>
        {/*<img src={Picture} alt='Lucas portrait' className='my-pic'/>*/}
        <h1>I make stuff</h1>
        <p>
          I'm passionate about technology and programming and using them to create whatever I want. I'm always working on something that improves 
          my skills, makes me learn something new or just some cool idea I randomly had. I tend to gravitate towards game development the 
          most since I've played games my entire life and it ends up being the projects that I work on the most on.
        </p>
        <p style={{margin: '20px 0px 20px 0px'}}>
          I plan on putting all my projects on itch.io once I feel they are worthy of being shared. Here are the highlights:
        </p>
        <div>
          <div className='project-1'>
            <h2 style = {{ marginBottom: '0' }}>Custom Engine Pokémon Game</h2>
            <div className='projectContainer'>
              <iframe height="200" width="355" title='Personal Project Demo Video'
                src="https://www.youtube.com/embed/RrCl_TlBW-E"> 
              </iframe>
              <div style={{ marginLeft: '30px' }}>
                <li>Gamefreak doesn't do it like they used to, so I will</li>
                <li>Making my own engine with OpenGL and C++ along the way for learning purposes</li>
                <li><a href="https://github.com/freddder/NewEngine">Source code</a></li>
              </div>
            </div>
          </div>
          <div className='project-2'>
            <h2 style = {{ marginBottom: '0' }}>72 Hours Game Jam Game</h2>
            <div className='projectContainer'>
              <a href="https://fredder.itch.io/little-guy-big-sword"><img height="200" width="355" alt='Little Guy Big Sword' src={LGBS}/></a>
              <div style={{ marginLeft: '30px' }}>
                <li>Project lead and programmer for short-term game-jam project</li>
                <li>Practiced leadership and fast prototyping with Godot</li>
                <li><a href="https://fredder.itch.io/little-guy-big-sword">Playable on itch</a></li>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;