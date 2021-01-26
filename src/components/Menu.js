/* eslint-disable arrow-body-style */
/* eslint-disable import/no-named-as-default */
/* eslint-disable no-unused-expressions */
import React from 'react';
import Logout from './Logout';

const MenuDropDown = (props) => {
  //   const {
  //     user: { userName }
  //   } = props;
  console.log('-----------props');
  return (
    <div className="dropdown-menu">
      <ul>
        <li className="user-name">Username</li>
        <a href="#">
          <li>Profile</li>
        </a>
        <a href="/Create">
          <li>Create article</li>
        </a>
        <a href="/bookmarks">
          <li>Bookmarks</li>
        </a>
        <Logout />
      </ul>
    </div>
  );
};

export default MenuDropDown;
