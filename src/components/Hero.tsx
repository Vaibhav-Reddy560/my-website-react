import React from 'react';
import Particles from './Particles';
import Countdown from './Countdown';

const Hero = () => {
  return (
    <section id="hero">
      {/* The background particle animation */}
      <Particles
        particleColors={['#713128', '#713128']}
        particleCount={400}
        particleSpread={10}
        speed={0.1}
        particleBaseSize={100}
        moveParticlesOnHover={true}
        alphaParticles={false}
        disableRotation={false}
      />

      <div className="hero-content">
        <p className="subtitle" data-aos="fade-up">
          <span className="text-black">BMSCE IEE COMPUTER SOCIETY</span>
          <span className="text-accent"> IN COLLABORATION WITH </span>
          <span className="text-black">IEEE WIE BANGALORE SECTION</span>
          <span className="text-accent"> PRESENTS</span>
        </p>

        <img src="/title_logo.png" alt="Tech For Good Summit Logo" className="hero-title-logo" data-aos="fade-up" data-aos-delay="200" />
        
        <p className="tagline" data-aos="fade-up" data-aos-delay="400">
          <strong>TURNING TECH INTO TOMORROW'S CHANGE</strong>
        </p>
        
        {/* --- THIS IS THE BIGGER BOX STRUCTURE --- */}
        <div className="countdown-container" data-aos="fade-up" data-aos-delay="450">
          <h3 className="countdown-label">Starts in</h3>
          <Countdown />
        </div>
        
        <a href="#register" className="btn" data-aos="fade-up" data-aos-delay="600">Get Ticket</a>
      </div>
    </section>
  );
};

export default Hero;
