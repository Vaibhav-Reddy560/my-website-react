import React from 'react';

const Register = () => {
  return (
    <section id="register">
      <div className="container">
        <h2 className="section-title" data-aos="fade-up">Choose Your Pass</h2>
        <div className="pricing-grid">
          
          {/* Summit Pass Card */}
          <div className="pricing-card" data-aos="fade-up" data-aos-delay="100">
            <h3>Summit Pass</h3>
            <p className="pass-description">Access to all keynotes, panel discussions, and networking sessions on Day 1.</p>
            <div className="price-container">
              <div className="price-option">
                <span className="price-amount">₹150</span>
                <span className="price-label">IEEE Member</span>
              </div>
              <div className="price-option">
                <span className="price-amount">₹200</span>
                <span className="price-label">Non-IEEE Member</span>
              </div>
            </div>
            <a href="#" className="btn">Get Ticket</a>
          </div>

          {/* Hackathon Pass Card */}
          <div className="pricing-card" data-aos="fade-up" data-aos-delay="200">
            <h3>Hackathon Pass</h3>
            <p className="pass-description">Full 24-hour hackathon access, including meals and overnight participation.</p>
            <div className="price-container">
              <div className="price-option">
                <span className="price-amount">₹250</span>
                <span className="price-label">IEEE Member</span>
              </div>
              <div className="price-option">
                <span className="price-amount">₹350</span>
                <span className="price-label">Non-IEEE Member</span>
              </div>
            </div>
            <a href="#" className="btn">Get Ticket</a>
          </div>

          {/* Full Access Pass Card */}
          <div className="pricing-card" data-aos="fade-up" data-aos-delay="300">
            <h3>Full Access Pass</h3>
            <p className="pass-description">The complete experience. Includes all Summit and Hackathon benefits.</p>
            <div className="price-container">
              <div className="price-option">
                <span className="price-amount">₹350</span>
                <span className="price-label">IEEE Member</span>
              </div>
              <div className="price-option">
                <span className="price-amount">₹500</span>
                <span className="price-label">Non-IEEE Member</span>
              </div>
            </div>
            <a href="#" className="btn">Get Ticket</a>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Register;