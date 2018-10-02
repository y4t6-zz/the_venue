import React, { Component } from 'react';
import './resources/styles.css';
import { Element } from 'react-scroll';

import Header from './components/header_footer/Header';
import Featured from './components/featured';
import VenueInfo from './components/venueInfo';
import Highlight from './components/Highlights';
import Pricing from './components/pricing';
import Location from './components/location';
import Footer from './components/header_footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="App" style={{ background: "#fff"}}>
        <Header />
        <Element name='1'>
          <Featured/>
        </Element>
        <Element name='2'>
          <VenueInfo/>
        </Element>
        <Element name='3'>
          <Highlight/>
        </Element>
        <Element name='4'>
          <Pricing/>
        </Element>
        <Element name='5'>
          <Location/>
        </Element>
        <Footer/>
      </div>
    );
  }
}

export default App;
