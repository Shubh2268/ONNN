import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Services from './components/Services';
import About from './components/About';
import Support from './components/Support';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

function App() {

  return (
    <div>
      <Navbar />
      <Home />
      <Services />
      <About />
      <Support />
      <Pricing />
      <Footer />
    </div>
  )
}

export default App;
