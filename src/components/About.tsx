import React from 'react';

const About = () => {
  return (
    <section id="about">
      <div className="container">
        <h2 className="section-title" data-aos="fade-up">About The Summit</h2>
        <div className="about-content">
          <div className="about-image" data-aos="fade-right" data-aos-delay="200">
            <img src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" alt="People collaborating on a tech project" />
          </div>
          <div className="about-text" data-aos="fade-left" data-aos-delay="400">
            <h3>Leveraging Technology for Social Impact</h3>
            <p>The Tech for Good Summit 2025 is a dynamic three-day event curated by the BMSCE IEEE Computer Society, focused on leveraging technology to drive positive social impact. Scheduled from 10th to 12th October, this summit brings together students, professionals, innovators, and changemakers under one roof to ideate, collaborate, and build tech-powered solutions for real-world challenges.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;