import './About.css';

import linkedin from '../../assets/icons/Linkedin.png';
import github from '../../assets/icons/Github.png';
import steam from '../../assets/icons/Steam_Icon.png';
import backloggd from '../../assets/icons/Backloggd_icon.png';

function About() {
    return (
        <div className='aboutContainer'>
            <div className='aboutTitles'>
                <h1>I make stuff</h1>
                <p>
                    I'm passionate about programming, technology and I'm always trying to expand my horizons when it comes to both.
                </p>
                <p>
                    Although I also have experience with web and software development, I tend to explore different concepts on the game development area.
                    Videogames are my main hobby and I am most invested projects related to them.
                </p>
                <h2>Email: lucasfredmagalhaes@gmail.com</h2>
                <div style={{ display: 'flex', justifyContent: 'space-evenly', width: '100%', margin: '20px' }}>
                    <div style={{ marginRight: '20px' }}>
                        <a href={'https://www.linkedin.com/in/l-magalhaes/'} target="_blank" rel="noreferrer" className='contactInfo'>
                        <img src={linkedin} alt='Linkedin' className='contactIcon'/>
                        <p style={{ margin: '0px' }}>Linkedin</p>
                        </a>
                        <a href={'https://github.com/freddder'} target="_blank" rel="noreferrer" className='contactInfo' style={{ marginTop: '10px' }}>
                            <img src={github} alt='Github' className='contactIcon'/>
                            <p style={{ margin: '0px' }}>Github</p>
                        </a>
                    </div>
                    <div>
                        <a href={'https://bckl.gg/paM5'} target="_blank" rel="noreferrer" className='contactInfo'>
                            <img src={backloggd} alt='Backloggd' className='contactIcon'/>
                            <p style={{ margin: '0px' }}>Backloggd</p>
                        </a>
                        <a href={'https://steamcommunity.com/profiles/76561198208954937/'} target="_blank" rel="noreferrer" className='contactInfo' style={{ marginTop: '10px' }}>
                            <img src={steam} alt='Steam' className='contactIcon' style={{ filter: 'invert(1)' }}/>
                            <p style={{ margin: '0px' }}>Steam</p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;