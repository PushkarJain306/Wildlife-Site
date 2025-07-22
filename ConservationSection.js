import React from 'react';
import './ConservationSection.css';

// Step 1: Import the image
import rhinoImg from '../assets/images/rhino.jpg';

const ConservationSection = () => (
  <section id="conservation">
    <div className="container conservation-container">
      <div className="conservation-text">
        <h2 className="section-title" style={{textAlign: 'left', marginLeft: 0}}>Our Commitment to Conservation</h2>
        <p>Wildlife conservation is at the core of our mission. It involves protecting animal and plant species and their habitats. We work towards maintaining healthy wildlife species populations and restoring, protecting, or enhancing natural ecosystems.</p>
        <button className="cta-button">Join Our Cause</button>
      </div>

      {/* Step 2: Apply the imported image as an inline style */}
      <div 
        className="conservation-image" 
        style={{ backgroundImage: `url(${rhinoImg})` }}
      >
      </div>
    </div>
  </section>
);

export default ConservationSection;