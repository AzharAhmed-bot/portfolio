// Body.js
import React from 'react';
import image from "../../assets/Software.png";
import './Body.css';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Body = () => {
    return (
        <div id="body" className="body">
            <div className="text-content">
                <h1 className="title">Hi,am Azhar Takoy!</h1>
                <p className="description">
                    I am a passionate developer with experience in creating dynamic and responsive web applications. 
                    Explore my projects and connect with me on GitHub and LinkedIn.
                </p>
                <div className="social-icons">
                    <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="icon">
                        <FaGithub size={30} />
                    </a>
                    <a href="https://www.linkedin.com/in/yourusername/" target="_blank" rel="noopener noreferrer" className="icon">
                        <FaLinkedinIn size={30} />
                    </a>
                </div>
            </div>
            <div className="image-content">
                <img src={image} alt="Profile" className="profile-image" />
            </div>
        </div>
    );
};

export default Body;
