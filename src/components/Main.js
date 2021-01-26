import React, { Component } from 'react';
import Landingpage from './Landingpage';
import Testimonies from './Testimonies';
import Footer from './Footer';
import Map from './Map';

export class Main extends Component {
  onChange = (category) => {
    this.setState({ activeCategory: category });
  };
  render() {
    return (
      <div>
        <Landingpage />
        <Testimonies />
        <Map />
        <Footer />
      </div>
    );
  }
}

export default Main;
