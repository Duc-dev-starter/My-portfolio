import React from 'react'
import "./App.css";
import Header from './Components/header/Header';
import Home from './Components/home/Home';
import About from './Components/about/About';
import Skill from './Components/skill/Skill';
import Services from './Components/services/Services';
import Qualification from './Components/qualification/Qualification';
// import Testimonial from './Components/testimonial/Testimonial';
import Contact from './Components/contact/Contact';
import Footer from './Components/footer/Footer';
import ScrollUp from './Components/scrollup/ScrollUp';

const App = () => {
  return (
    <>
      <Header />

      <main className='main'>
        <Home />
        <About />
        <Skill />
        <Services/>
        <Qualification/>
        {/* <Testimonial/> */}
        <Contact/>
      </main>
      <Footer/>
      <ScrollUp/>
    </>
  );
};


export default App
