import React from 'react';
import Navbar from "./NavigationBar";
import Hero from "./Hero";
import About from './About';
import Services from "./Services";
import Contact from './Contact';
import Footer from './Footer';

function Home() {
    return (
      <>
        <Navbar />
        <Hero />
        <About />
        <Services />
        <Contact />
        <Footer />
      </>
    );
}

export default Home
