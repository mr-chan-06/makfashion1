import React from 'react';
import './index.css';

import Header from './components/Header';
import Hero from './components/Hero';
import Collections from './components/Collections';
import WhyChooseUs from './components/WhyChooseUs';
import About from './components/About';
import Enquiry from './components/Enquiry';
import Footer from './components/Footer';
import MobileActions from './components/MobileActions';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <Collections />
        <WhyChooseUs />
        <About />
        <Enquiry />
      </main>
      <Footer />
      <MobileActions />
    </div>
  );
}

export default App;
