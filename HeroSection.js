import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import "./HeroSection.css";

// Make sure your elephant model is in the /public folder
function Model(props) {
  // I've updated this to use a placeholder elephant name
  const { scene } = useGLTF('/elephant.glb');
  return <primitive object={scene} {...props} />;
}

const HeroSection = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-content">
        <h1>Explore the Wild</h1>
        <p>An immersive journey into the heart of nature and its magnificent creatures.</p>
        <a href="#species" className="cta-button">Discover More</a>
      </div>
      <div className="hero-canvas">
        <Canvas dpr={[1, 2]} camera={{ position: [0, 2, 10], fov: 45 }}>
          <Suspense fallback={null}>
            {/* We've removed <Stage> and added our own lights */}
            <ambientLight intensity={0.5} />
            <directionalLight position={[-2, 5, 2]} intensity={1} />
            
            {/* Now this scale prop will work correctly */}
            <Model scale={3.5} position = {[0, -2.5, 0]}/>

          </Suspense>
          <OrbitControls autoRotate enableZoom={false} enablePan={false} />
        </Canvas>
      </div>
    </section>
  );
};

export default HeroSection;