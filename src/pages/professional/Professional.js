import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import '../ProjectPreview.css';

import pot from '../../assets/images/Path_of_Titans_Banner.jpg';
import unannounced from '../../assets/images/Unannounced_Banner.png';

const projects = [
    {
        title: "Path of Titans",
        banner: pot,
        engine: "Unreal Engine 5",
        role: "Gameplay Programmer",
        desc: "Multi-platform pre-historic themed MMO",
        page: "/pot"
    },
    {
        title: "Unnanounced Game",
        banner: unannounced,
        engine: "Unity",
        role: "Technical Consultant & Lead Programmer",
        desc: "More details when I'm allowed to talk about it",
        page: "/professional"
    },
    {
        title: "Unnanounced Game",
        banner: unannounced,
        engine: "Unreal Engine 5",
        role: "Gameplay Programmer",
        desc: "More details when I'm allowed to talk about it",
        page: "/professional"
    },
];

function Professional() {
    useEffect(() => {
        var tl = gsap.timeline();
        projects.forEach((_, i) => { 
            tl.fromTo(`.preview-${i}`, { y: -50, opacity: 0 }, { y: 0, opacity: 1, duration: 1 }, "-=0.5");
        })
    }, []);

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <h1>Professional Work</h1>
            {projects.map((project, idx) => { 
                return <div id={idx} className={`preview-${idx}`}><Link to={project.page}>
                    <img src={project.banner} alt='project banner' className='banner'/>
                    <div className='projDetail'>
                        <div style={{ textAlign: 'left', position:'absolute', top: '0px' }}>
                            <h2>{project.title}</h2>
                            <h3>{project.engine}</h3>
                            <h3>{project.role}</h3>
                        </div>
                        <div style={{ position:'absolute', bottom: '0px' }}>
                            <h3>{project.desc}</h3>
                        </div>
                    </div>
                </Link></div>
            })}
        </div>
    );
}

export default Professional;