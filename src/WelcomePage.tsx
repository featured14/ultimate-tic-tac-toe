import React, { useEffect, useState } from "react";
import UltimateBoard from "./UltimateBoard";

const WelcomePage = () => {
  const [startGame, setStartGame] = useState(false);

  useEffect(() => {
    const handleKeyPress = () => {
      // Check if any key is pressed (you can specify a particular key if needed)
      setStartGame(true);
    };

    // Add the event listener when the component mounts
    window.addEventListener("keydown", handleKeyPress);

    // Remove the event listener when the component unmounts to avoid memory leaks
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []); // The empty dependency array ensures that the listener is added and removed properly


  return (
    <div className="content-wrapper">
      {!startGame&& 
        <div className="welcome-page-wrapper">
          <div className="welcome-text">
            <h1 className="title">Welcome to Tic-Tac-TOH, <br />a thrilling twist on the classic game.</h1>
            <h1 className="text-white text-bold">How to Play</h1>
            <ul className="text-white">
              <li>
                <h2 className="text-white text-normal mb-0">Choose Your Avatar:</h2>
                <h2 className="text-white text-bolder m-0">Select an avatar to represent you on the board.</h2>
              </li>
              <li>
                <h2 className="text-white text-normal mb-0">Game Board:</h2>
                <h2 className="text-white text-bolder m-0">Play on a 3x3 grid of 9 smaller Tic-Tac-Toe boards.</h2>
              </li>
              <li>
                <h2 className="text-white text-normal mb-0">Select Small Board:</h2>
                <h2 className="text-white text-bolder m-0">Press a button to choose a small board. Each button corresponds to one of the 9 smaller boards.</h2>
              </li>
              <li>
                <h2 className="text-white text-normal mb-0">Place Your Move:</h2>
                <h2 className="text-white text-bolder m-0">Then press again any button to make your move within that board.<br />Each button corresponds to one of the 9 squares.<br />Your move determines where your opponent plays on the big board.<br /><span className="text-normal">(eg. If you place your "X" or "O" in the top-left square of a small board, your opponent must play their move in the corresponding top-left small board of the big board.)</span></h2>
              </li>
              <li>
                <h2 className="text-white text-normal mb-0">Victory:</h2>
                <h2 className="text-white text-bolder m-0">Win a small board to gain control of that section on the big board.<br />Win the big board with three-in-a-row to win the game.</h2>
              </li>
            </ul>
            <h1 className="text-white text-bold mb-0">Ready to play?</h1>
            <h1 className="text-white text-bold mt-0">Press any button to continue.</h1>
          </div>
        </div>
      }
      {startGame && <UltimateBoard />}
  </div>
  );
};

export default WelcomePage;
