import { useEffect, useState } from "react";
import UltimateBoard from "./UltimateBoard";


const PlayersSelectPage = () => {
    const [nextPage, setNextPage] = useState(false);

    useEffect(() => {
      const handleKeyPress = () => {
        // Check if any key is pressed (you can specify a particular key if needed)
        setNextPage(true);
      };
  
      // Add the event listener when the component mounts
      window.addEventListener("keydown", handleKeyPress);
  
      // Remove the event listener when the component unmounts to avoid memory leaks
      return () => {
        window.removeEventListener("keydown", handleKeyPress);
      };
    }, []); // The empty dependency array ensures that the listener is added and removed properly
  
  return (
    <div>
        {!nextPage &&
        <div className="players-select-wrapper">
            <h1 className="text-white text-normal mb-0">Choose Your Avatar</h1>
            <h1 className="text-white text-normal mt-0">Select an avatar to represent you on the board.</h1>
            <h2 className="text-white text-normal">Press the button that corresponds to the avatar that you want.</h2>
            <div className="logos-board-wrapper">
                <h1 className="text-white">Player 1</h1>
                <div className="board"> 
                    <div className="row">
                        <button className="logo-square js-logo"></button>
                        <button className="logo-square ts-logo"></button>
                        <button className="logo-square react-logo"></button>
                    </div>
                    <div className="row">
                    <button className="logo-square svelte-logo"></button>
                        <button className="logo-square angular-logo"></button>
                        <button className="logo-square vue-logo"></button>
                    </div>
                    <div className="row">
                    <button className="logo-square aurelia-logo"></button>
                        <button className="logo-square node-logo"></button>
                        <button className="logo-square ember-logo"></button>
                    </div>
                </div>
                <h1 className="text-white">Player 2</h1>
            </div>
        </div>}
        {nextPage && <UltimateBoard />}
    </div>
  );
};

export default PlayersSelectPage;
