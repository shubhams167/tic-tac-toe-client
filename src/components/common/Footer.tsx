import React from 'react';
import '../../assets/css/Footer.css';
import SocialIcons from './SocialIcons';

const Footer: React.FC = () => {
    return (
        <div className="footer">
            <p>Developed by Shubham Singh</p>
            <SocialIcons />
        </div>
    );
};

export default Footer;
