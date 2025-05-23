import React from 'react';

function Home() {
  return (
    <div
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
      <pre
        style={{
          fontFamily: 'monospace',
          fontSize: '1.2rem',
          lineHeight: '1.1',
          marginTop: '1.5rem',
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
  );
}

export default Home;