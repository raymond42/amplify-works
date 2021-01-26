import React from 'react';
import amplifyLogo from '../Assets/images/amplifyLogo.png';

export default function Footer() {
  return (
    <div>
      <footer>
        <div className="container">
          <div className="row">
            <div className="logo">
              <img src={amplifyLogo} alt="portfolio" />
            </div>
            <div className="social">
              <a href="#" target="_blank">
                <i className="fa fa-linkedin"></i>
              </a>
              <a href="#" target="_blank">
                <i className="fa fa-twitter"></i>
              </a>
              <a href="#" target="_blank">
                <i className="fa fa-instagram"></i>
              </a>
              <a href="#" target="_blank">
                <i className="fa fa-facebook"></i>
              </a>
              <a href="mailto:raymond42.gr@gmail.com" target="_blank">
                <i className="fa fa-envelope"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
      <section className="copyright">
        <div className="container">
          <p>&copy; 2021 copyright all right reserved</p>
        </div>
      </section>
    </div>
  );
}
