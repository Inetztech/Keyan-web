import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Component Imports (Paths adjusted to be relative to App.jsx)
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Expertise from './Components/Services/Expertise'; // Fixed trailing space error
import Contact from './Components/Contact/Contact';
import Navbar from './Navbar/Navbar';
import Careers from './Components/careers/Careers';
import Products from './Pages/Products';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/expertise" element={<Expertise />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/careers" element={<Careers />} />
      </Routes>
    </Router>
  );
}

export default App;