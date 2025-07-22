import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <nav className="navbar container">
        <a href="#home" className="nav-logo">WildScape</a>
        <ul className="nav-menu">
          <li className="nav-item"><a href="#species" className="nav-link">Species</a></li>
          <li className="nav-item"><a href="#conservation" className="nav-link">Conservation</a></li>
          <li className="nav-item"><a href="#gallery" className="nav-link">Gallery</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;