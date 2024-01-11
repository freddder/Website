import React, { useEffect } from 'react'
import gsap from 'gsap';
import Project from './Project';
import './Experience.css';

const projects = [
  {
    projName: 'Path of Titans',
    title: 'Game Programmer',
    link: 'https://pathoftitans.com/',
    responsabilities: ['Bug Fixing', 'Feature Planning', 'Quality Assurance'],
    skills: ['C++', 'Unreal Engine 5'],
    imgSrc: '../../images/Path_of_Titans_Banner.jpg',
    imgAlt: '',
  },
  {
    projName: 'Unannounced Unreal Game',
    title: 'Game Programmer',
    link: '',
    responsabilities: ['Prototyping', 'Feature Development', 'Animation Programming'],
    skills: ['C++', 'Unreal Engine 5'],
    imgSrc: '',
    imgAlt: '',
  },
  {
    projName: '[PERSONAL PROJECT] OpenGL Pokémon Game',
    title: 'Solo Developer',
    link: 'https://github.com/freddder/NewEngine',
    responsabilities: ['Engine Programming', 'Graphics Programming', 'Feature Planning/Development'],
    skills: ['C++', 'OpenGL'],
    imgSrc: '',
    imgAlt: '',
  },
  {
    projName: '[PERSONAL PROJECT] OpenGL Pokémon Game',
    title: 'Solo Developer',
    link: 'https://github.com/freddder/NewEngine',
    responsabilities: ['Engine Programming', 'Graphics Programming', 'Feature Planning/Development'],
    skills: ['C++', 'OpenGL'],
    imgSrc: '',
    imgAlt: '',
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
    <div style={{ minHeight: '90vh', width: '80vw', margin: '0 10vw 0 10vw' }}>
      { projects.map((projProps, index) => {
        projProps['projNumber'] = index + 1;
        return <Project {...projProps}/>
      })}
    </div>
  );
}

export default Experience;