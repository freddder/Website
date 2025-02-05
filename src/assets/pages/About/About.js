import React, { useEffect } from 'react';
import gsap from 'gsap';
import './About.css';
//import Picture from '../../images/My_Picture.jpg';
import LGBS from '../../images/TitleCard.png';
import WardensOath from '../../images/WardensOath.png'

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
          I'm always trying to learn new things and and apply that knowledge to make cool and (sometimes) practical things. Things like 
          making games, writing automation scripts, making my own game engine or this website. I tend to gravitate towards game development 
          more since I've played games my entire life and it is the thing that gives me most satisfaction when working on.
        </p>
        <p style={{margin: '20px 0px 20px 0px'}}>
          I make all of my projects public on Github or Itch once I feel they are worthy of being shared. More professional stuff can be found on my resume.
        </p>
        <div>
          <div className='project-1'>
            <h2 style = {{ marginBottom: '0' }}>Magik Engine</h2>
            <div className='projectContainer'>
              <iframe height="200" width="355" title='Personal Project Demo Video'
                src="https://www.youtube.com/embed/RrCl_TlBW-E"> 
              </iframe>
              <div style={{ marginLeft: '30px' }}>
                <li>Making my own engine with OpenGL and C++ for learning and creating a fan game along the way</li>
                <li>Wrote scripts to mass download and properly format assets from an API in Python</li>
                <li><a href="https://github.com/freddder/Magik">Source code</a></li>
              </div>
            </div>
          </div>
          <div className='project-2'>
            <h2 style = {{ marginBottom: '0' }}>Little Guy Big Sword</h2>
            <div className='projectContainer'>
              <a href="https://fredder.itch.io/little-guy-big-sword"><img height="200" width="355" alt='Little Guy Big Sword' src={LGBS}/></a>
              <div style={{ marginLeft: '30px' }}>
                <li>Action game where you charge your attacks as long as possible to deal massive damage</li>
                <li>Practiced leadership and fast prototyping for a 72 hours long game jam in Godot</li>
                <li><a href="https://fredder.itch.io/little-guy-big-sword">Playable on itch</a></li>
              </div>
            </div>
          </div>
          <div className='project-3'>
            <h2 style = {{ marginBottom: '0' }}>Warden's Oath</h2>
            <div className='projectContainer'>
              <a href="https://fredder.itch.io/wardens-oath"><img height="200" width="355" alt='Wardens Oath' src={WardensOath}/></a>
              <div style={{ marginLeft: '30px' }}>
                <li>Survival game where you need to defend a magical island from invaders without causing colateral damage</li>
                <li>Practiced using more complex features of Godot like tile maps and path finding for 2 week long game jam</li>
                <li><a href="https://fredder.itch.io/wardens-oath">Playable on itch</a></li>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;