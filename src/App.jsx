import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Services from './components/Services';
import About from './components/About';
import Support from './components/Support';

function App() {

  return (
    <div>
      <Navbar />
      <Home />
      <Services />
      <About />
      <Support />
    </div>
  )
}

export default App;
