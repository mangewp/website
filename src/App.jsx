import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import './App.css';
import Background from './components/Background';
import Home from './pages/Home';
import About from './pages/About'
import Projects from './pages/Projects';
import Links from './pages/Links';
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Background />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/links" element={<Links />} />
      </Routes>
    </Router>
  );
}

export default App;