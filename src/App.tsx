import { useEffect } from 'react';
import './App.css';

// Import the AOS library and its styles
import AOS from 'aos';
import 'aos/dist/aos.css'; 

import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Speakers from './components/Speakers';
import Schedule from './components/Schedule';
import Register from './components/Register';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  // This useEffect hook will run once when the App component loads
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 50,
    });
  }, []); // The empty array ensures this only runs on mount

  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Speakers />
        <Schedule />
        <Register />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;