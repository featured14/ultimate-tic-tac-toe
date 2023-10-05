import React, { useState } from 'react';
import Board from './Board';
import { SquareValue, BoardState, UltimateBoardProps } from './Types';
import { useEffect } from 'react';
import CongratsPage from './CongratsPage';
import EqualityPage from './EqualityPage';

const calculateWinner = (items: (SquareValue | BoardState)[]): BoardState => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (items[a] && items[a] === items[b] && items[a] === items[c]) {
      return items[a];
    }
  }
  
  // Check for draw
  if (items.every((item) => item !== null)) {
    return 'DRAW';
  }
  
  return null;
};


const UltimateBoard: React.FC<UltimateBoardProps> = ({player1, player2}) => {
  const [boards, setBoards] = useState<SquareValue[][]>(Array(9).fill(null).map(() => Array(9).fill(null)));
  const [nextBoard, setNextBoard] = useState<number | null>(null);
  const [xIsNext, setXIsNext] = useState<boolean>(true);
  const [boardStates, setBoardStates] = useState<BoardState[]>(Array(9).fill(null));
  const [ultimateWinner, setUltimateWinner] = useState<BoardState>(null);
  const [selectedBoard, setSelectedBoard] = useState<number | null>(null);
  const [playerTimer, setPlayerTimer] = useState(7);
  const [moveExplanation, setMoveExplanation] = useState("Press a button to choose a small board. \n Each button corresponds to one of the 9 smaller boards.");
  const [audioToPlay,]= useState(new Audio('./next_player_effect.mp3'));
    

  const handleClick = (boardIndex: number, squareIndex: number) => {
    if (ultimateWinner) {
      return; // If there is an ultimate winner, no more moves should be possible
    }
 
    const newBoards = [...boards];
    const boardState = boardStates[boardIndex];
  
    // If the square or the board is already filled, or if it's not the correct board to play,
    // then don't proceed with the move
    if (newBoards[boardIndex][squareIndex] || boardState || (nextBoard !== null && boardIndex !== nextBoard)) {
      return;
    }
  
    newBoards[boardIndex][squareIndex] = xIsNext ? player1 : player2;
    setBoards(newBoards);
  
    const winner = calculateWinner(newBoards[boardIndex]);
    const newBoardStates = [...boardStates];
    newBoardStates[boardIndex] = winner;

   setBoardStates(newBoardStates);

  
    let newNextBoard: number | null = squareIndex;
  
    if (winner) {
      newNextBoard = null; // Any board can be picked
    }
  
    // Check if the new next board is already disabled, and if so, set it to null.
    if (newNextBoard !== null && newBoardStates[newNextBoard]) {
      newNextBoard = null; // Any board can be picked
    }
    if(newNextBoard === null){
      setMoveExplanation("Press a button to choose a small board. \n Each button corresponds to one of the 9 smaller boards.");
    }else{
      setMoveExplanation("Press a button to make your move within that board. \n Each button corresponds to one of the 9 squares.");
    }
    setNextBoard(newNextBoard);
  
    // Check for ultimate winner
    // const ultimateWin = calculateUltimateWinner(newBoardStates);
    const ultimateWin = calculateWinner(newBoardStates);
    if (ultimateWin) {
      setUltimateWinner(ultimateWin);
      return; // No need to change turns if the game is over
    }


    audioToPlay.pause();
    audioToPlay.currentTime = 0;

    setXIsNext(!xIsNext);
    setPlayerTimer(7);

  };


  useEffect(() => {
    const countdownTimer = setInterval(() => {
      if(ultimateWinner){
        setPlayerTimer(0);
        clearInterval(countdownTimer);
        return
      }
      setPlayerTimer((prevSeconds) => {
        if(prevSeconds === 5){
          audioToPlay.play();
          console.log(audioToPlay)
        }
        if (prevSeconds === 1) {
          setXIsNext(!xIsNext);
          return 7;
        }
        return prevSeconds - 1;
      });
    }, 1000); // Update every 1 second (1000 milliseconds)
    
    const handleKeyPress = (event: KeyboardEvent) => {
      const keyMap = {
        'q': 0,
        'w': 1,
        'e': 2,
        'a': 3,
        's': 4,
        'd': 5,
        'z': 6,
        'x': 7,
        'c': 8,
      };
    
      const mappedIndex = keyMap[event.key as keyof typeof keyMap];
       
      if (typeof mappedIndex === 'undefined') {
        return;
      }
    

      // Logic when the next board is already decided
      if (nextBoard !== null) {
        handleClick(nextBoard, mappedIndex);
        setSelectedBoard(null); // Reset the selected board as we've just made a move
      } else {
        if (selectedBoard !== null) {
          // Now play the square in the selected board
          handleClick(selectedBoard, mappedIndex);
          setSelectedBoard(null); // Reset the selected board as we've just made a move
        }else{
            // Logic when any board can be chosen
            if ( boardStates[mappedIndex]===null) {
              // Select the board first
              setSelectedBoard(mappedIndex);
              setNextBoard(mappedIndex);
              setMoveExplanation("Press a button to make your move within that board. \n Each button corresponds to one of the 9 squares.");    
            }else{
              setMoveExplanation("Press a button to choose a small board. \n Each button corresponds to one of the 9 smaller boards.");    
            }
      }
    }
    };

    window.addEventListener('keydown', handleKeyPress);

    // Cleanup
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
      clearInterval(countdownTimer);
    };
  }, [xIsNext, nextBoard, handleClick, selectedBoard,boardStates, ultimateWinner, audioToPlay]);

  const renderBoard = (boardIndex: number) => {
    const isDisabled = boardStates[boardIndex];
    const isActive = nextBoard === null ? !isDisabled : boardIndex === nextBoard;
    const isSelected = boardIndex === selectedBoard;

    return (
      <div 
        key={boardIndex} 
        className={`
          board-wrapper 
          board-${boardIndex}
          ${isActive ? 'active-board' : ''} 
          ${isSelected ? 'selected-board' : ''}
        `}
      >
        {(!isDisabled && boardStates[boardIndex]!=='DRAW') &&  
          <div className={boardStates[boardIndex] ==='DRAW'? 'hidden':''}>
            <Board
              squares={boards[boardIndex]}
              onClick={(squareIndex: number) => handleClick(boardIndex, squareIndex)}
              highlight={nextBoard === boardIndex}
              disabled={!!isDisabled}
            /></div>}

        {(isDisabled && boardStates[boardIndex]!=='DRAW') && <div className={`square-winner ${boardStates[boardIndex]?.toString()}`}></div>}

        {( boardStates[boardIndex]==='DRAW') &&  
          <Board
            squares={boards[boardIndex]}
            onClick={(squareIndex: number) => handleClick(boardIndex, squareIndex)}
            highlight={nextBoard === boardIndex}
            disabled={!!isDisabled}
          />}
     
      </div>
    );
  };

  return (
    <div>
      <div className={`ultimate-board ${selectedBoard!== null && boardStates[selectedBoard] === null ? 'has-selected-board': ''}`} >
        <div className="status-bar">
        {!ultimateWinner && <h1 className="player-timer"><span className="hourglass"></span>{playerTimer} sec</h1>}
          <h1 className="player-turn">
          Player {xIsNext? 1 : 2} <div className={`player-logo-square ${xIsNext? player1 : player2}`}></div>
          </h1>
          <h2 className='move-explanation'>{moveExplanation}</h2>
        </div>
        <div className="row">{[0, 1, 2].map(renderBoard)}</div>
        <div className="row">{[3, 4, 5].map(renderBoard)}</div>
        <div className="row">{[6, 7, 8].map(renderBoard)}</div>
      </div>
      {ultimateWinner && ultimateWinner !=='DRAW' && (<CongratsPage ultimateWinner={ultimateWinner?.toString()} />)}
      {ultimateWinner && ultimateWinner ==='DRAW' && (<EqualityPage />)}
     </div>
  );
};

export default UltimateBoard;
