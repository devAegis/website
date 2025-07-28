// Import React's useState hook (not used in this file, can be removed if unnecessary)
import { useState } from 'react'
// Import routing components from react-router-dom
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Import assets and page components
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Landing from './pages/Landing'
import About from './pages/About'
import Contact from './pages/Contact'
import Services from './pages/Services';
import './index.css';

// Main App component
function App() {
  return (
    // Set up the router for the application
    <Router>
      {/* Define application routes */}
      <Routes>
        {/* Route for the landing page */}
        <Route path="/" element={<Landing />} />
        {/* Route for the about page */}
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />

      </Routes>
    </Router>
  )
}

export default App
