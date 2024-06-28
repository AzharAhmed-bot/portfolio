// Create your About component here
// AboutMe.js
import React from 'react';
import './About.css';

const About = () => {
    return (
        <div id="about-me" className="about-me">
            <div className="about-content">
                <h1 className="about-title">About Me</h1>
                <p className="about-description">
                    Hello! I'm Azhar, a passionate software developer with a keen interest in building impactful web applications. 
                    With a background in computer science, I specialize in AI engineering, and I'm always eager to learn and adopt new technologies.
                </p>
                <p className="about-description">
                    My journey in software development started in 2023, and since then, I've had the opportunity to work on various exciting projects. 
                    When I'm not coding, you can find me gaming.
                </p>
                <p className="about-description">
                    Let's connect and create something amazing together!
                </p>
            </div>
        </div>
    );
};

export default About;
