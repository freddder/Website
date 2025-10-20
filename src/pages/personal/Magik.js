import { useEffect } from 'react';
import gsap from 'gsap';
import '../Project.css';

import banner from '../../assets/images/PKM_Banner.png';
import tool from '../../assets/images/Magik_Map_Tool.png';
import map from '../../assets/images/Magik_Imported_Map.png';
import data from '../../assets/images/Magik_file_data.png';
import code from '../../assets/images/Magik_data_code.png';
import visual from '../../assets/images/Magik_visual.gif';

function Magik() {

    useEffect(() => {
        var tl = gsap.timeline();
        tl.fromTo('.projectContainer', { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1 });
    }, []);

    return (
        <div className='projectContainer'>
            <img src={banner} alt='Magik banner' className='projectBanner'/>
            <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div>
                    <p>
                        This is my biggest personal project. A Pokémon fan game born from my wish to see what if the franchise could be if they prioritized
                        different things than that they did. In other words, what would I have changed if I was in charge of making these games. I also wanted
                        this to be an excuse for me to learn the absolute technical fundamentals of how games are made. From core gameplay design to 
                        the render pipeline.
                    </p>
                    <br/>
                    <p>
                        The original goal was somewhat close to the original Pokémon formula, but more recently I felt like the project is overscoped and decided 
                        to fork the original project and make a different game that still used what I've built but is more on the side of a spinoff that centers
                        around the player managing a Pokémon daycare in a simulation and management style game.
                    </p>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-evenly', width: '100%', margin: '20px 0px 20px 0px' }}>
                    <div>
                        <h2>Highlights</h2>
                        <ul>
                            <li>Map creation & importing</li>
                            <li>Automated asset formatting</li>
                            <li>UI and Text system</li>
                            <li>Visuals</li>
                        </ul>
                    </div>
                    <div>
                        <h2>Info</h2>
                        <ul>
                            <li><a href='https://github.com/freddder/Magik' target='_blank' rel='noreferrer' >Original project repo</a></li>
                            <li><a href='https://github.com/freddder/DaycareGame' target='_blank' rel='noreferrer' >Daycare project repo</a></li>
                            {/*<li><a href='https://www.youtube.com/watch?v=UP4oKdRICbQ' target='_blank' rel='noreferrer' >Map creation demo video</a></li>*/}
                        </ul>
                    </div>
                </div>
                <iframe width="80%" height="500px" src="https://www.youtube.com/embed/RrCl_TlBW-E" title="Magik Engine Feature Demo" allowFullScreen/>
                <hr className='divider' />
                <div>
                    <h1>Map Creation and Importing</h1>
                    <br/>
                    <p>
                        I needed a way to easily create maps and importing them into the games. What I came up with was using an already existing tool made for modding 
                        and adding custom maps to Pokémon game on the Nintendo DS called <b>Pokémon DS Map Studio</b>. With it I could make the map with custom models 
                        and textures and export the full 3D model as an .obj file together with a .pdsmap file that describes the tiles that make the map used to define 
                        terrain collision, the bounds of where players can and can't go, positions of instanced animated objects and enemies spawning areas.
                    </p>
                    <br/>
                    <p>
                        I also hame a <a href='https://www.youtube.com/watch?v=UP4oKdRICbQ' target='_blank' rel='noreferrer' >small video demo</a> where I create 
                        a small map from scratch and inport it into the game in a little more than 10 minutes.
                    </p>
                    <div style={{ display: 'flex', width: '100%', alignItems: 'center', justifyContent: 'center', marginTop: '10px' }}>
                        <img src={tool} alt='map tool' style={{ width: '40%' }} />
                        <div className='arrowRight' />
                        <img src={map} alt='map in game' style={{ width: '40%' }} />
                    </div>
                </div>
                <hr className='divider' />
                <div>
                    <h1>Automated Asset Formatting</h1>
                    <br/>
                    <p>
                        At the time of writing this there are more than 1000 Pokémon and I wanted to have as many of them in the game as possible. Unfortunately, supporting
                        a single Pokémon means collecting their respective data (combat stats, abilities, evolution tree, etc) and compiling into a usable format.
                        Not only that but also getting their respective sprite sheets with their sprites for when in the overworld, in combat (front and back) and
                        for every variant form they can possibly have (gendered form, regional form, shiny, etc). That's a lot.
                    </p>
                    <br/>
                    <p>
                        Fortunately, I can use Python scripts to fetch all of that data and sprites from <a a href='https://pokeapi.co/' target='_blank' rel='noreferrer'>PokeAPI</a>.
                        Which provides all of that in a web REST API format. All I had to do is save the information I needed into a json file and download the sprite sheets into
                        an organized assets folder.
                    </p>
                    <div style={{ display: 'flex', width: '100%', alignItems: 'center', justifyContent: 'center', marginTop: '10px' }}>
                        <img src={code} alt='data donwload code' style={{ width: '50%' }}/>
                        <div style={{ paddingLeft: '10px', width:'50%' }}>
                            <img src={data} alt='data files' style={{ width: '100%' }}/>
                            <h2>Common flags</h2>
                            <ul>
                                <li><b>_f</b> = female</li>
                                <li><b>_s</b> = shiny</li>
                                <li><b>_bb</b> = battle back</li>
                                <li><b>_bf</b> = battle front</li>
                                <li><b>_ico</b> = UI icon</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className='divider' />
                <div>
                    <h1>Visuals</h1>
                    <p>
                        Not only I wanted to learn make the rendering system myself, but it was a good opportunity to make the game look visually distinc from the more recent
                        entries in the series. I decided to try to create what would the natural evolution of the style of the DS games.
                    </p>
                    <br/>
                    <p>
                        Some notable changes include the wind motion on trees and water light reflection. Both use noise generated on the GPU and sampled using vertexes global
                        position.
                    </p>
                    <img src={visual} alt='visuals gif' style={{ width: '100%', marginTop: '10px' }}/>
                </div>
            </div>
        </div>
    );
}

export default Magik;