import React, { useEffect } from 'react';
import gsap from 'gsap';
import './About.css';
//import Picture from '../../images/My_Picture.jpg';

function About() {

  useEffect(() => {
    var tl = gsap.timeline();
    tl.fromTo(".textBlock", { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1 });
    tl.fromTo("iframe", { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1 }, "-=0.4");
  }, [])

  return (
    <div style={{ minHeight: '90vh' }}>
      <div className='textBlock'>
        {/*<img src={Picture} alt='Lucas portrait' className='my-pic'/>*/}
        <p>
        I've had a passion for technology since I was a kid, but specially for games. Since learnign how to code, I always try to learn new skills and 
        implement them on personal projects. From special graphic effects to AI, there is nothing I'm not willing to learn. Same goes for software 
        developement.
        </p>
        <p style={{margin: '20px 0px 20px 0px'}}>
          Here are some skills, technologies and languages I learned from both professional and personal projects:
        </p>
        <div style={{ display: 'flex', justifyContent: 'space-evenly', margin: '20px 0px 20px 0px'}}>
          <div>
            <li>C</li>
            <li>C++</li>
            <li>C#</li>
            <li>OpenGL</li>
          </div>
          <div>
            <li>React</li>
            <li>TypeScript</li>
            <li>JavaScript</li>
            <li>HTML</li>
            <li>CSS/SASS</li>
          </div>
          <div>
            <li>React</li>
            <li>Jira</li>
            <li>SQL</li>
            <li>NoSQL</li>
            <li>AWS</li>
          </div>
          <div>
            <li>Unreal Engine</li>
            <li>Unity</li>
            <li>Godot</li>
          </div>
        </div>
        <p>In case you want to a taste of my work, here is a demo video of my biggest project and (now most) of it's features:</p>
        <div style={{ display: 'flex', justifyContent: 'center', margin: '20px 0px 20px 0px' }}>
          <iframe height="300" width="500" title='Personal Project Demo Video'
            src="https://www.youtube.com/embed/RrCl_TlBW-E"> 
          </iframe>
        </div>
      </div>
    </div>
  );
}

export default About;