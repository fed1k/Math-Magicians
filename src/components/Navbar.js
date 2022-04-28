import React from 'react';
import { FcAdvance } from 'react-icons/fc';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar">
    <FcAdvance className="icon" />
    <h1 className="header-text">Math Magicians</h1>
    <ul className="nav-list-container">
      <Link to="/" className="nav-list">Home</Link>
      <Link to="/design" className="nav-list">Calculator</Link>
      <Link to="/quote" className="nav-list">Quote</Link>
    </ul>
  </nav>
);

export default Navbar;
