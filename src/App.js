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

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCJO5gtvBaY-v5X-FGhnpIQQWqXqd6EXwA",
  authDomain: "dml-portfolio.firebaseapp.com",
  projectId: "dml-portfolio",
  storageBucket: "dml-portfolio.appspot.com",
  messagingSenderId: "678090197885",
  appId: "1:678090197885:web:e5ddff289573db9696da14",
  measurementId: "G-0WR65715GD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

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
