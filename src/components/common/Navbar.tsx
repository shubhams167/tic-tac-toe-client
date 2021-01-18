import React from 'react';
import '../../assets/css/Navbar.css';
import Logo from './Logo';
import Navlinks from './Navlinks';
import Switch from './Switch';

const Navbar: React.FC = () => {
    const navLinks = [
        {
            text: 'Home',
            href: '#',
        },
        {
            text: 'Play',
            href: '#',
        },
        {
            text: 'Rules',
            href: '#',
        },
        {
            text: 'Help',
            href: '#',
        },
        {
            text: 'Donate',
            href: '#',
        },
    ];

    return (
        <nav className="nav-bar">
            <Logo height={50} width={50} />
            <Navlinks data={navLinks} />
            <Switch />
        </nav>
    );
};

export default Navbar;
