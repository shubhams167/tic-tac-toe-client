import React from 'react';
import Navlink from './Navlink';

type Props = {
    data: {
        text: string;
        href?: string;
    }[];
};

const Navlinks: React.FC<Props> = ({ data }) => {
    return (
        <div className="nav-links">
            {data.map((d, idx) => (
                <Navlink key={idx} href={d.href} text={d.text} />
            ))}
        </div>
    );
};

export default Navlinks;
