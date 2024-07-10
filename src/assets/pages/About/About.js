import React, { useEffect } from 'react';
import gsap from 'gsap';
import './About.css';
import Picture from '../../images/My_Picture.jpg';

function About() {

  useEffect(() => {
    var tl = gsap.timeline();
    tl.fromTo(".textBlock", { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1 });
    tl.fromTo("li", { y: -20, opacity: 0 }, { y: 0, opacity: 1, duration: 1 }, "-=0.4");
  }, [])

  return (
    <div style={{ minHeight: '90vh' }}>
      <div className='textBlock'>
        <img src={Picture} alt='Lucas portrait' className='my-pic'/>
        <p>
          I've graduated from a program that taught me about most (if not all) different fields of programming, but the most important thing
          I learned is that I love working with technology. Either that being implementing new features or building something from ground up.
          No matter what it is, my satisfaction comes from seeing my work in action and learning new skills from projects and teammates.
        </p>
        <p style={{margin: '20px 0px 20px 0px'}}>
          Here are some skills that I've aquired while working on different projects:
        </p>
        <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
          <div>
            <li>React</li>
            <li>TypeScript</li>
            <li>JavaScript</li>
            <li>SQL</li>
            <li>AWS</li>
          </div>
          <div>
            <li>C#</li>
            <li>C++</li>
            <li>OpenGL</li>
            <li>Unreal Engine 5</li>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;