import React from 'react';
import CrossSvg from '../assets/images/cross.svg';

type Props = {
    height: number;
    width: number;
};

const Cross: React.FC<Props> = ({ height, width }) => {
    return <img src={CrossSvg} width={width} height={height} alt="Cross" />;
};

export default Cross;
