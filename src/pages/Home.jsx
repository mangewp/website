import React, { useRef, useEffect, useState } from 'react';
import ederIcon from '../assets/eder.png';

function Home() {
  const preRef = useRef(null);
  const containerRef = useRef(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    function resize() {
      if (preRef.current && containerRef.current) {
        const preWidth = preRef.current.scrollWidth;
        const containerWidth = containerRef.current.offsetWidth;
        if (preWidth > containerWidth) {
          setScale(containerWidth / preWidth);
        } else {
          setScale(1);
        }
      }
    }
    resize();
    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        color: '#fff',
        textAlign: 'center',
      }}
    >
      <h1>Welcome to the website of</h1>
      <img
        src={ederIcon}
        alt="Eder"
        style={{
          width: '900px',
          height: '300px',
          borderRadius: '10%',
          margin: '0rem 0 1rem 0',
          objectFit: 'contain',

        }}
      />
    </div>
  );
}

export default Home;