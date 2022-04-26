import React from "react";
import { FcAdvance } from "react-icons/fc";
const Navbar = () => {
    return (
        <nav className="navbar">
            <FcAdvance className="icon"/>
            <h1 className="header-text">Math Magicians</h1>
            <ul className="nav-list-container">
                <li className="nav-list">Home</li>
                <li className="nav-list">Calculator</li>
                <li className="nav-list">Quote</li>
            </ul>
        </nav>
    );
}
 
export default Navbar;