import React from 'react';
import CircleSvg from '../assets/images/circle.svg';

type Props = {
    height: number | string;
    width: number | string;
};

const Circle: React.FC<Props> = ({ height, width }) => {
    return <img src={CircleSvg} width={width} height={height} alt="Circle" />;
};

export default Circle;
