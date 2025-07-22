import React from 'react';
import './SpeciesSection.css';

// Step 1: Import the images from your assets folder
import tigerImg from '../assets/images/tiger.jpg';
import eagleImg from '../assets/images/eagle.jpg';
import bearImg from '../assets/images/bear.jpg';

const speciesData = [
  {
    name: 'Bengal Tiger',
    sciName: 'Panthera tigris tigris',
    description: 'The Bengal tiger is a striped predator with a powerful build and one of the largest cat species.',
    // Step 2: Use the imported image variable
    image: tigerImg
  },
  {
    name: 'Bald Eagle',
    sciName: 'Haliaeetus leucocephalus',
    description: 'A bird of prey found in North America, known for its white head and tail feathers.',
    image: eagleImg
  },
  {
    name: 'Grizzly Bear',
    sciName: 'Ursus arctos horribilis',
    description: 'A large subspecies of brown bear inhabiting North America, known for the grizzled appearance of its fur.',
    image: bearImg
  }
];

const SpeciesCard = ({ name, sciName, description, image }) => (
  // Step 3: The image is now a local background image
  <div className="species-card" style={{ backgroundImage: `url(${image})` }}>
    <div className="card-overlay">
      <h3>{name}</h3>
      <h4>{sciName}</h4>
      <p>{description}</p>
    </div>
  </div>
);

const SpeciesSection = () => {
  return (
    <section id="species" style={{ backgroundColor: '#fff' }}>
      <div className="container">
        <h2 className="section-title">Explore Species</h2>
        <div className="species-grid">
          {speciesData.map(species => (
            <SpeciesCard key={species.name} {...species} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpeciesSection;