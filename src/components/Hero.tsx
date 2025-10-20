import React from 'react';
import Particles from './Particles';
import Countdown from './Countdown'; // Import the Countdown component

const Hero = () => {
  return (
    <section id="hero">
      {/* The background particle animation */}
      <Particles
        particleColors={['#713128', '#713128']}
        particleCount={300}
        particleSpread={10}
        speed={0.1}
        particleBaseSize={100}
        moveParticlesOnHover={true}
        alphaParticles={false}
        disableRotation={false}
      />

      <div className="hero-content">
        <p className="subtitle" data-aos="fade-up">BMSCE IEEE COMPUTER SOCIETY IN COLLABORATION WITH  IEEE WIE BANGALORE SECTION PRESENTS</p>
        <img src="/title_logo.png" alt="Tech For Good Summit Logo" className="hero-title-logo" data-aos="fade-up" data-aos-delay="200" />
        <p data-aos="fade-up" data-aos-delay="400">“Turning Tech into Tomorrow’s Change”</p>
        
        {/* The Countdown timer is placed here */}
        <Countdown />

        <a href="#register" className="btn" data-aos="fade-up" data-aos-delay="600">Register Now</a>
      </div>
    </section>
  );
};

export default Hero;