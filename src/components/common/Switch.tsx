import React, { useState } from 'react';
import { darkTheme, lightTheme } from '../../utils/constants';

const Switch: React.FC = () => {
    const [currentTheme, setTheme] = useState<'light' | 'dark'>('light');
    const [switchStyle, setSwitchStyle] = useState<React.CSSProperties>({
        transform: 'translate(0px)',
    });

    const applyTheme = (theme: 'light' | 'dark') => {
        const settings = theme === 'light' ? lightTheme : darkTheme;
        Object.keys(settings).forEach((property) => {
            const value: string = (settings as any)[property];
            document.documentElement.style.setProperty(property, value);
        });
    };

    const handleClick = () => {
        const nextTheme = currentTheme === 'light' ? 'dark' : 'light';
        setSwitchStyle({ transform: nextTheme === 'light' ? 'translate(0px)' : 'translate(10px)' });
        setTheme(nextTheme);
        applyTheme(nextTheme);
    };

    return (
        <button className="theme-switch" onClick={handleClick}>
            <div style={switchStyle}></div>
        </button>
    );
};

export default Switch;
