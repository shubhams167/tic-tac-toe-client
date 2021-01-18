import React from 'react';

type Props = {
    href?: string;
    text: string;
};

const Navlink: React.FC<Props> = ({ href = '#', text }) => {
    return (
        <a className="nav-link" href={href}>
            {text}
        </a>
    );
};

export default Navlink;
