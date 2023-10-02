import React from 'react';
import { SquareProps } from './Types';

const Square: React.FC<SquareProps> = ({ value, onClick }) => {
  return (
    <button className={`square ${value}`} onClick={onClick}></button>
  );
};

export default Square;
