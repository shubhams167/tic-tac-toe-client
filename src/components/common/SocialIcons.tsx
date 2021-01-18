import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const SocialIcons: React.FC = () => {
    return (
        <div className="social-icons">
            <a href="https://github.com/shubhams167" target="_blank" rel="noreferrer">
                <FaGithub className="social-icon" />
            </a>
            <a href="https://www.linkedin.com/in/shubhams167/" target="_blank" rel="noreferrer">
                <FaLinkedin className="social-icon" />
            </a>
            <a href="https://twitter.com/shubhams167" target="_blank" rel="noreferrer">
                <FaTwitter className="social-icon" />
            </a>
        </div>
    );
};

export default SocialIcons;
