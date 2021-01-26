import React, { Component } from 'react';
import person1 from '../Assets/images/person1.jpg';
import person2 from '../Assets/images/person2.jpg';
import person3 from '../Assets/images/person3.jpg';

export default class Testimonies extends Component {
  render() {
    return (
      <section className="testimonies" id="testimonies">
        <div className="container">
          <div className="row">
            <div className="section-title text-center">
              <h1>Testimonies</h1>
            </div>
          </div>
          <div className="row">
            <div className="testimonies-content">
              <div className="box">
                <div className="icon">
                  {/* <i className="fa fa-code"></i> */}
                  <img alt="rayimg" src={person1} />
                </div>
                <h5>Alice Mbabazi</h5>
                <p>
                  Nevertheless, the country faces important youth employment
                  challenges, especially in terms of high rates of working
                  poverty and underemployment. Time-related underemployment
                  affects 30 percent of employed people, while around 2 million
                  people are in subsistence farming.
                </p>
              </div>
              <div className="box">
                <div className="icon">
                  {/* <i className="fa fa-laptop"></i> */}
                  <img alt="rayimg" src={person2} />
                </div>
                <h5>Mary Umutako</h5>
                <p>
                  Nevertheless, the country faces important youth employment
                  challenges, especially in terms of high rates of working
                  poverty and underemployment. Time-related underemployment
                  affects 30 percent of employed people, while around 2 million
                  people are in subsistence farming.
                </p>
              </div>
              <div className="box">
                <div className="icon">
                  {/* <i className="fa fa-mobile"></i> */}
                  <img alt="rayimg" src={person3} />
                </div>
                <h5>Lilian Zuba</h5>
                <p>
                  Nevertheless, the country faces important youth employment
                  challenges, especially in terms of high rates of working
                  poverty and underemployment. Time-related underemployment
                  affects 30 percent of employed people, while around 2 million
                  people are in subsistence farming.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
