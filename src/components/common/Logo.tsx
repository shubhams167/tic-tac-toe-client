import React from 'react';
import LogoSvg from '../../assets/images/logo-light.svg';

type Props = {
    height: number | string;
    width: number | string;
};

const Logo: React.FC<Props> = ({ height, width }) => {
    return <img className="logo" src={LogoSvg} width={width} height={height} alt="Logo" />;
};

export default Logo;
