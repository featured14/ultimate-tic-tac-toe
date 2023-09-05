import React from 'react';
import Square from './Square';
import { BoardProps } from './Types';

const Board: React.FC<BoardProps> = ({ squares, onClick, highlight, disabled }) => {
  const renderSquare = (i: number) => (
    <Square value={squares[i]} onClick={() => !disabled && onClick(i)} />
  );

  return (
    <div className={`board ${highlight ? 'highlight' : ''} ${disabled ? 'disabled' : ''}`}>
      <div className="row">{[0, 1, 2].map(renderSquare)}</div>
      <div className="row">{[3, 4, 5].map(renderSquare)}</div>
      <div className="row">{[6, 7, 8].map(renderSquare)}</div>
    </div>
  );
};

export default Board;
