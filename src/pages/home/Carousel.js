import { useEffect, useState } from 'react'
import './Carousel.css'

import arrow from '../../assets/icons/Arrow.png';

function Carousel(props) {
    const [slide, setSlide] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        if (isPaused) return; 

        const interval = setInterval(() => {
            nextSlide();
        }, 4000);

        return () => clearInterval(interval);
    }, [isPaused, slide]);

    const nextSlide = () => {
        setSlide(slide === props.slides.length - 1 ? 0 : slide + 1);
    }

    const previousSlide = () => {
        setSlide(slide === 0 ? props.slides.length - 1 : slide - 1);
    }

    return (
        <div className='carousel' onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
            <img src={arrow} className='arrow arrow-left' alt='left arrow' onClick={previousSlide}/>
            {props.slides.map((slideData, idx) => {
                return <img key={idx} src={slideData.background} alt='' className={slide === idx ? 'slide' : 'slide slide-hidden'}/>
                
            })}
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