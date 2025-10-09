import React from 'react';
import './Gallery.css';

// Import your existing gallery images
import foxImg from '../assets/images/fox.jpg';
import jellyfishImg from '../assets/images/jellyfish.jpg';
import leopardImg from '../assets/images/leopard.jpg';
import puffinImg from '../assets/images/puffin.jpg';
import deerImg from '../assets/images/deer.jpg';
import redPandaImg from '../assets/images/red-panda.jpg';

// Import the four new images
import pandaImg from '../assets/images/panda.jpg';
import wolfImg from '../assets/images/wolf.jpg';
import zebraImg from '../assets/images/zebra.jpg';
import macawImg from '../assets/images/macaw.jpg';


// The array now contains all 10 images
const galleryImages = [
  foxImg,
  jellyfishImg,
  leopardImg,
  puffinImg,
  deerImg,
  redPandaImg,
  pandaImg,
  wolfImg,
  zebraImg,
  macawImg
];

const Gallery = () => (
  <section id="gallery" style={{ backgroundColor: '#fff' }}>
    <div className="container">
      <h2 className="section-title">Wildlife Gallery</h2>
      <div className="gallery-grid">
        {galleryImages.map((img, index) => (
          <div className="gallery-item" key={index}>
            <img src={img} alt={`Wildlife ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Gallery;