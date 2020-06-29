import React from 'react';
import './styles/main.css';
import Navigation from './components/Navigation';
import Navbar from "./components/NavigationBar";
import Hero from './components/Hero';
import About from './components/About';

function App() {
  return (
    <>
      {/* <Navigation /> */}
      <Navbar />
      <Hero />
      <About />
    </>
  );
}

export default App;
