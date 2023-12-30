import './Earth.css';
import React, { useEffect } from 'react'
import gsap from 'gsap';

function Earth() {

  useEffect(() => {
    var continent1 = gsap.timeline({ repeat: -1 });
    continent1.to('.land-1', { x: 1500, duration: 8, ease: 'none' });
    continent1.to('.land-2', { x: 1500, duration: 8, ease: 'none' }, "<");
    
    var continent2 = gsap.timeline({ repeat: -1 });
    continent2.to('.land-3', { x: 750, duration: 4, ease: 'none' });
    continent2.to('.land-3', { x: -750,  duration: 0, ease: 'none' });
    continent2.to('.land-3', { x: 0,  duration: 4, ease: 'none' });
    
    var continent3 = gsap.timeline({ repeat: -1 });
    continent3.to('.land-4', { x: 750, duration: 4, ease: 'none' });
    continent3.to('.land-4', { x: -750,  duration: 0, ease: 'none' });
    continent3.to('.land-4', { x: 0,  duration: 4, ease: 'none' });

    var continent4 = gsap.timeline({ repeat: -1 });
    continent4.to('.land-5', { x: 1500, duration: 8, ease: 'none' });
  }, [])

  return (
    <div className='container'>
      <div className="ocean">
          <div className='land-1' style={{ top: '300px', left: '-400px' }} />
          <div className='land-2' style={{ top: '400px', left: '-450px' }} />
          <div className='land-3' style={{ top: '330px', left: '200px' }} />
          <div className='land-4' style={{ top: '100px', left: '0px' }} />
          <div className='land-5' style={{ top: '200px', left: '-850px' }} />
      </div>
    </div>
  );
}

export default Earth;