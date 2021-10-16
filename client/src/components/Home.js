import React from 'react';
import Navbar from "./NavigationBar";
import Hero from "./Hero";
import About from './About';
import Services from "./Services";
import Footer from './Footer';

function Home() {
    return (
      <>
        <Navbar />
        <Hero />
        <About />
        <Services />
        <Footer />
      </>
    );
}

export default Home;
