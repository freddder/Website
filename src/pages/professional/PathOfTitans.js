import { useEffect } from 'react';
import gsap from 'gsap';
import '../Project.css';

import banner from '../../assets/images/Path_of_Titans_Banner.jpg';

function PathOfTitans() {

    useEffect(() => {
        var tl = gsap.timeline();
        tl.fromTo('.projectContainer', { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1 });
    }, []);

    return (
        <div className='projectContainer'>
            <img src={banner} alt='Path of Titans banner' style={{ width: '100%', height: '20vh', position: 'relative', left: '0px', top: '0px', objectFit: 'cover' }}/>
            <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{ display: 'flex', justifyContent: 'space-evenly', width: '100%', marginBottom: '20px' }}>
                    <div>
                        <h1>Info</h1>
                        <ul>
                            <li><b>Engine:</b> Unreal Engine 5</li>
                            <li><b>Platforms:</b> PC, Mobile, Consoles</li>
                            <li><b>Role:</b> Gameplay Programmer</li>
                            <li><b>Time:</b> 6 months</li>
                        </ul>
                    </div>
                    <div>
                        <h1>Responsabilities</h1>
                        <ul>
                            <li>Planning Quest Giver Spawning System</li>
                            <li>General bug fixing</li>
                        </ul>
                    </div>
                </div>
                <iframe width="80%" height="500px" src="https://www.youtube.com/embed/klv0zmj9f90" title="Path of Titans - Night Stalker Update Trailer" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen/>
                <hr className='divider' />
                <div style={{ width: '100%' }}>
                    <h1>Quest Giver System</h1>
                    <br/>
                    <p>
                        I was tasked with creating a system that designers could use to setup dynamically spawning
                        NPC dinosaurs that players can interact with to get quests.
                    </p>
                    <br/>
                    <p>This system was supposed to accomodate a few constraints. These include:</p>
                    <ol>
                        <li><b>Players' Species:</b> players using a herbivore specie can only accept quests from herbivore quest givers. Same for carnivores;</li>
                        <li><b>Preset Locations:</b> specific quest givers can only spawn at specific locations</li>
                        <li><b>Proximity:</b> the system should prioritize spawning questgivers close to active players</li>
                    </ol>
                    <br/>
                    <p>
                        With those in mind, I created 2 Actor classes: the QuestGiverSpawnManager singleton responsible to hold the main spawning logic and a 
                        QuestGiverSpawnPoint which can be individually customized by designers to allow different types of quest givers to spawn at that location. 
                        These settings could specify their species, type of quests they give and specific quest givers all at the same time.
                    </p>
                    <br/>
                    <p>
                        Once the spawn points are placed, they are registered to the manager at beggining of runtime. After that the manager is responsible for
                        finding the appropriate spawn point for quest givers while considering if they have recently spawned one recently, active players' position,
                        different priorities and etc.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default PathOfTitans;