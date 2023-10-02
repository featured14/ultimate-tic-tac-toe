export type SquareValue = string | null;

export type BoardState = string | 'DRAW' | null;

export interface SquareProps {
  value: SquareValue;
  onClick: () => void;
}

export interface BoardProps {
  squares: SquareValue[];
  onClick: (index: number) => void;
  highlight: boolean;
  disabled: boolean;
}


export interface UltimateBoardProps {
  player1: string
  player2: string
}