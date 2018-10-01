import React, { Component } from 'react';
import './resources/styles.css';

import Header from './components/header_footer/Header';
import Featured from './components/featured';
import VenueInfo from './components/venueInfo';

class App extends Component {
  render() {
    return (
      <div className="App" style={{ height: "1500px", background: "rgb(57, 189, 235)"}}>
        <Header />
        <Featured/>
        <VenueInfo/>
      </div>
    );
  }
}

export default App;
