import './Earth.css';
import React, { useEffect } from 'react'
import gsap from 'gsap';

function Earth() {

  useEffect(() => {
    var continent1 = gsap.timeline({ repeat: -1 });
    continent1.to('.land-1', { x: 1500, duration: 8, ease: 'none' });
    
    var continent2 = gsap.timeline({ repeat: -1 });
    continent2.to('.land-2', { x: 750, duration: 4, ease: 'none' });
    continent2.to('.land-2', { x: -750,  duration: 0, ease: 'none' });
    continent2.to('.land-2', { x: 0,  duration: 4, ease: 'none' });
    
    var continent3 = gsap.timeline({ repeat: -1 });
    continent3.to('.land-3', { x: 750, duration: 4, ease: 'none' });
    continent3.to('.land-3', { x: -750,  duration: 0, ease: 'none' });
    continent3.to('.land-3', { x: 0,  duration: 4, ease: 'none' });

    var continent4 = gsap.timeline({ repeat: -1 });
    continent4.to('.land-4', { x: 1500, duration: 8, ease: 'none' });

    var cloud1 = gsap.timeline({ repeat: -1 });
    cloud1.to('.cloud-1', { x: 500, duration: 5, ease: 'none' });
    cloud1.to('.cloud-1', { x: -500, duration: 0, ease: 'none' });
    cloud1.to('.cloud-1', { x: 0, duration: 5, ease: 'none' });

    var cloud2 = gsap.timeline({ repeat: -1 });
    cloud2.to('.cloud-2', { x: 800, duration: 7, ease: 'none' });
    cloud2.to('.cloud-2', { x: -800, duration: 0, ease: 'none' });
    cloud2.to('.cloud-2', { x: 0, duration: 7, ease: 'none' });

    var cloud3 = gsap.timeline({ repeat: -1 });
    cloud3.to('.cloud-3', { x: 800, duration: 6, ease: 'none' });
    cloud3.to('.cloud-3', { x: -800, duration: 0, ease: 'none' });
    cloud3.to('.cloud-3', { x: 0, duration: 6, ease: 'none' })

    var cloud4 = gsap.timeline({ repeat: -1 });
    cloud4.to('.cloud-4', { x: 600, duration: 8, ease: 'none' });
    cloud4.to('.cloud-4', { x: -600, duration: 0, ease: 'none' });
    cloud4.to('.cloud-4', { x: 0, duration: 8, ease: 'none' });

    var cloud5 = gsap.timeline({ repeat: -1 });
    cloud5.to('.cloud-5', { x: 800, duration: 8, ease: 'none' });
    cloud5.to('.cloud-5', { x: -800, duration: 0, ease: 'none' });
    cloud5.to('.cloud-5', { x: 0, duration: 8, ease: 'none' });
  }, [])

  return (
    <div className='container'>
      <div className="ocean">
        <div className='land-1' style={{ top: '300px', left: '-400px' }} />
        <div className='land-1' style={{ top: '400px', left: '-450px' }} />
        <div className='land-2' style={{ top: '330px', left: '200px' }} />
        <div className='land-3' style={{ top: '100px', left: '0px' }} />
        <div className='land-4' style={{ top: '200px', left: '-850px' }} />
        <div className='cloud-1' style={{ top: '120px', left: '150px' }} />
        <div className='cloud-2' style={{ top: '220px', left: '20px' }} />
        <div className='cloud-2' style={{ top: '270px', left: '-80px' }} />
        <div className='cloud-3' style={{ top: '250px', left: '550px' }} />
        <div className='cloud-4' style={{ top: '400px', left: '300px' }} />
        <div className='cloud-5' style={{ top: '430px', left: '-200px' }} />
      </div>
    </div>
  );
}

export default Earth;