// src/components/Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    return (
        <nav className="navbar">
            <div className="navbar-left">
                <a href='' className="logo">My App</a>
            </div>
            <div className={`navbar-center ${isOpen ? 'active' : ''}`}>
                <ul className="nav-links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/course">Course</Link></li>
                    <li><Link to='/Instructor'>Instructor Details</Link></li>
                    <li><Link to='/Contact'>Contact Us</Link></li>
                </ul>
            </div>
            <div className="hamburger" onClick={toggleMenu}>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
        </nav>
    );
};

export default Navbar;