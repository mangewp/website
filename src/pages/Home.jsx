import React, { useRef } from 'react';
import ederImg from '../assets/eder.png'; // Adjust the path if needed
import { useEffect } from "react";

function Home() {
  const containerRef = useRef(null);
  useEffect(() => {document.title = "Eder's Website | Home";}, []);
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
        <img
          src={ederImg}
          alt="Eder"
          style={{
            maxWidth: '100%',
            height: 'auto',
            marginTop: '1.5rem',
            marginBottom: '8.0rem',
            display: 'block',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        />
      </div>
    </div>
  );
}

export default Home;