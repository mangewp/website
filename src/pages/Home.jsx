import React, { useRef, useEffect, useState } from 'react';

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
      <div style={{ width: '100%', overflow: 'hidden' }}>
        <pre
          ref={preRef}
          style={{
            fontFamily: 'monospace',
            fontSize: '1.2rem',
            lineHeight: '1.1',
            marginTop: '1.5rem',
            display: 'inline-block',
            transform: `scale(${scale})`,
            transformOrigin: 'left top',
            margin: 0,
          }}
        >
{`
   ▄████████ ████████▄     ▄████████    ▄████████
  ███    ███ ███   ▀███   ███    ███   ███    ███
  ███    █▀  ███    ███   ███    █▀    ███    ███
 ▄███▄▄▄     ███    ███  ▄███▄▄▄      ▄███▄▄▄▄██▀
▀▀███▀▀▀     ███    ███ ▀▀███▀▀▀     ▀▀███▀▀▀▀▀  
  ███    █▄  ███    ███   ███    █▄  ▀███████████
  ███    ███ ███   ▄███   ███    ███   ███    ███
  ██████████ ████████▀    ██████████   ███    ███
                                       ███    ███










`}
        </pre>
      </div>
    </div>
  );
}

export default Home;