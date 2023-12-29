import './Earth.css';
import React, { useEffect } from 'react'
import gsap from 'gsap';

function Earth() {

  useEffect(() => {
    //gsap.to(".bonezone", {
    //  rotation: 360,
    //  duration: 3,
    //  repeat: -1,
    //  ease: 'none'
    //});
  }, [])

  return (
    <div className='container'>
      <div className="ocean">

      </div>
    </div>
  );
}

export default Earth;