import React from 'react';
import Circle from './Circle';
import Cross from './Cross';

type Props = {
    id: number;
    value: 'X' | 'O' | null;
    onClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void;
};

const Block: React.FC<Props> = ({ id, value, onClick }) => {
    const borderWidth = '3px';
    const borderRadius = '10px';
    const height = 60;
    const width = 60;

    const style: React.CSSProperties = {
        borderTopWidth: id === 3 || id === 4 || id === 5 ? borderWidth : '0',
        borderBottomWidth: id === 3 || id === 4 || id === 5 ? borderWidth : '0',
        borderLeftWidth: id % 3 === 1 ? borderWidth : '0',
        borderRightWidth: id % 3 === 1 ? borderWidth : '0',
        borderTopLeftRadius: id === 0 ? borderRadius : '0',
        borderTopRightRadius: id === 2 ? borderRadius : '0',
        borderBottomLeftRadius: id === 6 ? borderRadius : '0',
        borderBottomRightRadius: id === 8 ? borderRadius : '0',
    };

    return (
        <div className="block" style={style}>
            <button
                className="block-btn"
                id={id.toString()}
                onClick={(event: React.MouseEvent<HTMLButtonElement>) => onClick(event, id)}
            >
                {value === 'X' && <Cross height={height} width={width} />}
                {value === 'O' && <Circle height={height} width={width} />}
            </button>
        </div>
    );
};

export default Block;
