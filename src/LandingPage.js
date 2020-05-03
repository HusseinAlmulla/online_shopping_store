import React from 'react';
import './LandingPage.css';
import CardsList from './Components/CardsList.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/NavBar';
import data from './data.json';
import NavBar2 from './Components/NavBar2';
import Cover from './Components/Cover';
import Home from './Components/Home';
import Welcome from './Components/Welocme';
import Footer from './Components/Footer';

 function LandingPage() {
    return (
      <div className="">
        <NavBar2/> {/* new navigation bar with serch window */}
        <Home/>   {/* welcome text with background image */}
        <Welcome/> {/* welcome text with shopping button*/}
        <Footer/>
      </div>
    );
  }
  
  export default LandingPage;


  