import React, { useState } from 'react';
import "./Header.css";
import { FaAsterisk, FaInfoCircle, FaProjectDiagram, FaTools, FaBars,FaTimes } from 'react-icons/fa';

const Header = () => {
    const [navOpen, setNavOpen] = useState(false);

    const toggleNav = () => {
        setNavOpen(!navOpen);
    };

    return (
        <div className="header">
            <div className="header-logo">
                <h3 className="header-name"><FaAsterisk className="logo-icon" /> A.A</h3>
            </div>
            <ul className={`navigation ${navOpen ? 'active' : ''}`}>
                <li><FaInfoCircle className="nav-icon" /> About</li>
                <li><FaProjectDiagram className="nav-icon" /> Projects</li>
                <li><FaTools className="nav-icon" /> Skills</li>
            </ul>
            <div className="nav-bar" onClick={toggleNav}>
                {navOpen? <FaTimes/> :<FaBars/>}
            </div>
            <div className="header-container">
                <p className="header-text">Software Engineer</p>
            </div>
        </div>
    );
};

export default Header;
