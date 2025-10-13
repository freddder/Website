import { useEffect, useState, useRef } from 'react'
import './Carousel.css'

import arrow from '../../assets/icons/Arrow.png';

function Carousel(props) {
    const [slide, setSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 4000);
    })

    /*const intervalRef = useRef(null); // To store the interval ID

    const startTimer = () => {
        intervalRef.current = setInterval(() => {
            nextSlide();
        }, 4000);
    }

    const stopTimer = () => {
        clearInterval(intervalRef.current);
    }*/

    const nextSlide = () => {
        setSlide(slide === props.slides.length - 1 ? 0 : slide + 1);
    }

    const previousSlide = () => {
        setSlide(slide === 0 ? props.slides.length - 1 : slide - 1);
    }

    return (
        <div className='carousel' /*onMouseEnter={() => stopTimer} onMouseLeave={startTimer}*/>
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