import React, { useRef, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';
import homeIcon from '../assets/home-icon.png';

const tabs = [
  { to: '/', label: <img src={homeIcon} alt="Home" className="home-icon" />, key: 'home', className: 'home-icon-link' },
  { to: '/about', label: 'About', key: 'about' },
  { to: '/projects', label: 'Projects', key: 'projects' },
  { to: '/links', label: 'Links', key: 'links' },
];

const Header = () => {
  const location = useLocation();
  const tabRefs = useRef([]);
  const underlineRef = useRef(null);
  const [underlineStyle, setUnderlineStyle] = useState({ left: 0, width: 0 });

  useEffect(() => {
    const activeIdx = tabs.findIndex(tab => tab.to === location.pathname);
    const activeTab = tabRefs.current[activeIdx];
    if (activeTab) {
      const { left, width } = activeTab.getBoundingClientRect();
      const parentLeft = activeTab.parentNode.parentNode.getBoundingClientRect().left;
      setUnderlineStyle({
        left: left - parentLeft,
        width,
      });
    }
  }, [location.pathname]);

  return (
    <header className="header">
      <nav className="header-nav" style={{ position: 'relative' }}>
        <div className="header-left">
          <div
            className="header-tab-wrapper"
            ref={el => (tabRefs.current[0] = el)}
          >
            <Link to="/" className={`header-tab home-icon-link`}>
              <img src={homeIcon} alt="Home" className="home-icon" />
            </Link>
          </div>
        </div>
        <div className="header-center">
          <div
            className="header-tab-wrapper"
            ref={el => (tabRefs.current[1] = el)}
          >
            <Link to="/about" className="header-tab">About</Link>
          </div>
          <div
            className="header-tab-wrapper"
            ref={el => (tabRefs.current[2] = el)}
          >
            <Link to="/projects" className="header-tab">Projects</Link>
          </div>
          <div
            className="header-tab-wrapper"
            ref={el => (tabRefs.current[3] = el)}
          >
            <Link to="/links" className="header-tab">Links</Link>
          </div>
        </div>
        <div
          ref={underlineRef}
          className="header-underline-animated"
          style={{
            left: underlineStyle.left,
            width: underlineStyle.width,
          }}
        />
      </nav>
    </header>
  );
};

export default Header;