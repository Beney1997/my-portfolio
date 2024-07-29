import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function Header() {
  return (
    <header>
      <img src={require('../src/images/gift.jpg')} alt="Gift" 
      style={{ width: '200px', height: '300px', marginBottom: '20px' }} />
      <h1 style={{ marginTop: '0' }}>EGHAREVBA IGHOSOGIE GIFT</h1>
      <nav>
        <ul>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/projects">Projects</NavLink></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;