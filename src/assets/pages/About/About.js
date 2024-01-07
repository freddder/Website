import React from 'react'
import gsap from 'gsap';
import './About.css'

function About() {

  return (
    <div style={{ display: 'flex', alignItems: 'center', height: '100%', padding: '0 10% 0 10%' }}>
        <div className='textBlock'>
            <div className='' />
            {/* Photo here */}
            <p>
                My full name is Lucas Frederico Piquet Carneiro Magalhaes (hence the url). I've studied programming 
                and enjoyed video games through all of my life. My dream is to work on video games that people can 
                enjoy as much as I enjoyed my favorites. So I specialized in game programming so I could work on 
                the industry that brought so much joy to my life.
            </p>
            <p>
                Here are some of my favorite games
            </p>
        </div>
    </div>
  );
}

export default About;