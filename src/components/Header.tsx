import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // If window.scrollY is > 50, set isScrolled to true
      setIsScrolled(window.scrollY > 50);
    };

    // Add event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // The empty array means this effect runs only once on mount

  return (
    // We use a template literal to conditionally add the 'scrolled' class
    <header className={`header ${isScrolled ? 'scrolled' : ''}`} id="header">
      <div className="container navbar">
        <a href="#" className="logo">
          {/* Remember to put your logo in the 'public' folder */}
          <img src="/ieee_logo.png" alt="IEEE Computer Society Logo" />
        </a>
        <nav>
          <ul className="nav-links">
            <li><a href="#hero">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#speakers">Speakers</a></li>
            <li><a href="#schedule">Schedule</a></li>
            <li><a href="#register">Register</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;