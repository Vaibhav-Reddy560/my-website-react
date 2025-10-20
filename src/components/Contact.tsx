import React from 'react';

const Contact = () => {
  return (
    <section id="contact">
      <div className="container">
        <h2 className="section-title" data-aos="fade-up">Contact Us</h2>
        <p className="contact-subtitle" data-aos="fade-up" data-aos-delay="100">
          Have any questions? Feel free to reach out to our coordinators.
        </p>
        <div className="contact-grid">
          {/* Contact Card 1 */}
          <div className="contact-card" data-aos="fade-up" data-aos-delay="200">
            <i className="fas fa-user-circle contact-icon"></i>
            <h3>Sahithi</h3>
            <p><i className="fas fa-phone"></i> 91481 83348</p>
          </div>
          
          {/* Contact Card 2 */}
          <div className="contact-card" data-aos="fade-up" data-aos-delay="300">
            <i className="fas fa-user-circle contact-icon"></i>
            <h3>Nandan</h3>
            <p><i className="fas fa-phone"></i> 77600 80258</p>
          </div>

          {/* Email Card */}
          <div className="contact-card" data-aos="fade-up" data-aos-delay="400">
            <i className="fas fa-envelope contact-icon"></i>
            <h3>Email Us</h3>
            <p><a href="mailto:ieee.cs@bmsce.ac.in">ieee.cs@bmsce.ac.in</a></p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;