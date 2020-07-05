import React from 'react';
import './styles/main.css';
import Navigation from './components/Navigation';
import Navbar from "./components/NavigationBar";
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';

function App() {
  return (
    <>
      {/* <Navigation /> */}
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Contact />
    </>
  );
}

export default App;
