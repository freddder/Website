import React, { useEffect } from 'react';
import gsap from 'gsap';
import Project from './Project';
import './Experience.css';
import path from '../../images/Path_of_Titans_Banner.jpg';
import pkm from '../../images/PKM_Banner.png';
import unannounced from '../../images/Unannounced_Banner.png';

const projects = [
  {
    projName: 'Path of Titans',
    title: 'Game Programmer',
    link: 'https://pathoftitans.com/',
    responsabilities: ['Bug Fixing', 'Feature Planning', 'Quality Assurance'],
    skills: ['C++', 'Unreal Engine 5'],
    imgSrc: path,
    imgAlt: 'Path of Titans Banner',
  },
  {
    projName: 'Unannounced Unreal Game',
    title: 'Game Programmer',
    link: '',
    responsabilities: ['Prototyping', 'Feature Development', 'Animation Programming'],
    skills: ['C++', 'Unreal Engine 5'],
    imgSrc: unannounced,
    imgAlt: 'Unannounced Game Banner',
  },
  {
    projName: '[PERSONAL PROJECT] OpenGL Pokémon Game',
    title: 'Solo Developer',
    link: 'https://github.com/freddder/NewEngine',
    responsabilities: ['Engine Programming', 'Graphics Programming', 'Feature Planning/Development'],
    skills: ['C++', 'OpenGL'],
    imgSrc: pkm,
    imgAlt: 'Pokemon OpenGL Game Banner',
  },
];

function Experience() {

  useEffect(() => {
    var tl = gsap.timeline();
    tl.fromTo(".project-1", { y: -50, opacity: 0 }, { y: 0, opacity: 1, duration: 1 });
    tl.fromTo(".project-2", { y: -50, opacity: 0 }, { y: 0, opacity: 1, duration: 1 }, "-=0.5");
    tl.fromTo(".project-3", { y: -50, opacity: 0 }, { y: 0, opacity: 1, duration: 1 }, "-=0.5");
  }, [])

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div style={{ minHeight: '90vh', width: '80vw', backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: '30px 30px 0px 30px' }}>
        { projects.map((projProps, index) => {
          projProps['projNumber'] = index + 1;
          return <Project {...projProps}/>
        })}
      </div>
    </div>
  );
}

export default Experience;