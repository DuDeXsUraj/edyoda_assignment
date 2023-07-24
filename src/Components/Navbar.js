import React from 'react';
import logo from '../Assets/Images/Edyoda.png'
import { IconBase } from 'react-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faSearch } from '@fortawesome/free-solid-svg-icons';

function Navbar()  {
  return (

    <nav class="navbar">
    <div class="navbar-logo">
      <img src={logo} alt="Logo"/>
    </div>

    <div class="navbar-left">
      <ul>
        <li><a href="#home">Course  <FontAwesomeIcon icon={faAngleDown}/></a></li>
        <li><a href="#about">Programs  <FontAwesomeIcon icon={faAngleDown}/></a></li>
      </ul>
    </div>

    <div class="navbar-right">
      <ul>
        <button className='search'><FontAwesomeIcon icon={faSearch}/></button>
        <button className='login'>Log in</button>
        <button className='btn'>JOIN NOW</button>
      </ul>
    </div>
  </nav>


  );
};

export default Navbar;
