import React, { useEffect, useRef } from 'react';
import blackHoleVideo from '../assets/blackhole.mp4';
import './Background.css';

const Background = () => {
  const bgRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 30; // adjust 30 for effect strength
      const y = (e.clientY / innerHeight - 0.5) * 30;
      if (bgRef.current) {
        bgRef.current.style.transform = `scale(1.1) translate(${x}px, ${y}px)`;
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="background-image" ref={bgRef}>
      <video
        src={blackHoleVideo}
        autoPlay
        loop
        muted
        playsInline
        className="background-video"
      />
    </div>
  );
};

export default Background;