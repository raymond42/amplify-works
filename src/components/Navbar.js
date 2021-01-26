import React, { Component } from 'react';
import classNames from 'classnames/bind';
import styles from '../App.scss';
import { Link, animateScroll as scroll } from 'react-scroll';
import amplifyLogo from '../Assets/images/amplifyLogo.png';
// import MenuDropDown from './Menu';
// import DefaultAvatar from '../common/images/avatar.png';

const cx = classNames.bind(styles);

export class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      links: [
        // { id: 'about', link: 'About' },
        { id: 'testimonies', link: 'Testimonies' },
        { id: 'map', link: 'Map' }

        // { id: 'Logout', link: 'Logout' }
      ]
      // showMenu: false,
      // showNotification: false
    };
    // this.closeMenu = this.closeMenu.bind(this);
  }

  onChange = (link) => {
    this.setState({ activeLink: link });
  };

  // displayMenu = () => {
  //   this.setState({ showMenu: true }, () => {
  //     document.addEventListener('click', this.closeMenu);
  //   });
  // };

  // closeMenu() {
  //   this.setState({ showMenu: false, showNotification: false }, () => {
  //     document.removeEventListener('click', this.closeMenu);
  //   });
  // }

  render() {
    const { links } = this.state;
    const linksArray = [{ id: 'home', link: 'Home' }];
    links.map((link) => {
      if (linksArray.indexOf(link.link) < 0) {
        linksArray.push({ link: link.link, id: link.id });
      }
    });

    return (
      <header uk-sticky="show-on-up: true; animation: uk-animation-slide-top">
        <div className="container">
          <div className="row">
            <div className="brand-name">
              <a className="logo" href="/">
                <img src={amplifyLogo} alt="portfolio" />
              </a>
            </div>
            <div class="ham-burger">
              <i class="fa fa-bars"></i>
            </div>
            <div className="navbar">
              <ul>
                {linksArray.map((link) => (
                  <li key={link.id}>
                    <Link
                      activeClass="active"
                      to={`${link.id}`}
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                    >
                      {link.link}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="user-action">
                <a href="/login" className="reset-link">
                  Login
                </a>

                {/* <Link>Logout</Link> */}
              </div>

              {/* <div className="dropdown">
                <li className="img-list-item">
                  <p>Menu</p>
                </li>
                {showMenu ? (
                  <div className="dropdown-content">
                    <MenuDropDown user={'User'} />
                  </div>
                ) : (
                  ''
                )}
              </div> */}
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Navbar;
