import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import SpeciesSection from './components/SpeciesSection';
import ConservationSection from './components/ConservationSection';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <HeroSection />
        <SpeciesSection />
        <ConservationSection />
        <Gallery />
      </main>
      <Footer />
    </div>
  );
}

export default App;