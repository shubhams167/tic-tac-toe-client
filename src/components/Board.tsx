import React, { useState } from 'react';
import '../assets/css/Board.css';
import Block from './Block';

const Board: React.FC = () => {
    const [user, setUser] = useState<'X' | 'O' | null>('O');
    const [board, setBoard] = useState<('X' | 'O' | null)[]>(Array(9).fill(null));

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>, id: number) => {
        console.log('Button clicked');

        const newBoard = [...board];
        newBoard[id] = user;

        setBoard(newBoard);

        console.log(newBoard);

        user === 'X' ? setUser('O') : setUser('X');
    };

    return (
        <div className="board">
            {board.map((b, idx) => (
                <Block key={idx} value={b} id={idx} onClick={handleClick} />
            ))}
        </div>
    );
};

export default Board;
