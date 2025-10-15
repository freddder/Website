import { useEffect, useState } from 'react'
import './Carousel.css'

import arrow from '../../assets/icons/Arrow.png';

function Carousel(props) {
    const [slide, setSlide] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    
    const nextSlide = () => {
        setSlide(slide === props.slides.length - 1 ? 0 : slide + 1);
    }

    const previousSlide = () => {
        setSlide(slide === 0 ? props.slides.length - 1 : slide - 1);
    }

    useEffect(() => {
        if (isPaused) return; 

        const interval = setInterval(() => {
            nextSlide();
        }, 4000);

        return () => clearInterval(interval);
    }, [isPaused, slide]);

    return (
        <div className='carousel' onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
            {props.slides.map((slideData, idx) => {
                return <div key={idx} alt='' className={slide === idx ? 'slide' : 'slide slide-hidden'}>
                    <img alt={'background'} src={slideData.background} style={{ objectFit: 'cover', width: '100%', height: '100%' }}/>
                    <div className='skillContainer'>
                        {slideData.skills.map((skill, j) => {
                            return <img id={j} alt={'skill 1'} src={skill} className='skill'/>
                        })}
                    </div>
                    <div className='slideTitle'>{slideData.title}</div>
                </div>
            })}
            <img src={arrow} className='arrow arrow-left' alt='left arrow' onClick={previousSlide}/>
            <img src={arrow} className='arrow arrow-right' alt='right arrow' onClick={nextSlide}/>
            <span className='indicatorsContainer'>
                {props.slides.map((_, idx) => {
                    return <button key={idx} onClick={() => setSlide(idx)} className={slide === idx ? 'indicator' : 'indicator indicator-inactive'}/>
                })}
            </span>
        </div>
    );
}

export default Carousel;