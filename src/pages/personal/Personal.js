import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import '../ProjectPreview.css';

import pkm from '../../assets/images/PKM_Banner.png';
import warden from '../../assets/images/WO_Gameplay.png';
import lgbs from '../../assets/images/LGBS_Gameplay.png';
import mountain from '../../assets/images/Mountain_Gamplay.png';
import loop from '../../assets/images/LOOP_Gameplay.png';

const projects = [
    {
        title: "Project Magik",
        banner: pkm,
        engine: "Custom Engine",
        desc: "Pokémon fangame made on my own engine",
        page: "/magik"
    },
    {
        title: "Project Mountain",
        banner: mountain,
        engine: "Godot",
        desc: "Emerging 3D movement prototype",
        page: "/mountain"
    },
    {
        title: "Warden's Oath",
        banner: warden,
        engine: "Godot",
        desc: "Pirate Software Game Jam submission (2 weeks)",
        page: "/wardensoath"
    },
    {
        title: "LOOP",
        banner: loop,
        engine: "Godot",
        desc: "GMTK 2025 Game Jam submission (4 days)",
        page: "/loop"
    },
    {
        title: "Little Guy Big Sword",
        banner: lgbs,
        engine: "Godot",
        desc: "GMTK 2024 Game Jam submission (4 days)",
        page: "/lgbs"
    },
];

function Personal() {
    useEffect(() => {
        var tl = gsap.timeline();
        projects.forEach((_, i) => { 
            tl.fromTo(`.preview-${i}`, { y: -50, opacity: 0 }, { y: 0, opacity: 1, duration: 1 }, "-=0.5");
        })
    }, []);

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <h1>Personal Projects</h1>
            {projects.map((project, idx) => { 
                return <div id={idx} className={`preview-${idx}`}><Link to='/'>
                    <img src={project.banner} alt='banner' className='banner'/>
                    <div className='projDetail'>
                        <div style={{ textAlign: 'left', position:'absolute', top: '0px' }}>
                            <h2>{project.title}</h2>
                            <h3>{project.engine}</h3>
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

export default Personal;