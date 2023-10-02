import { useEffect, useState } from "react";
import UltimateBoard from "./UltimateBoard";


const PlayersSelectPage = () => {
    const [player1Logo, setPlayer1Logo] = useState('');
    const [player2Logo, setPlayer2Logo] = useState('');
    const [seconds, setSeconds] = useState(5);
    const [nextPage, setNextPage] = useState(false);

    useEffect(() => {
   

        // Function to be called after 5 seconds
        const handleTimeout = () => {
           setNextPage(true);
        };

      
        const handleKeyPress = (event: KeyboardEvent) => {
            const keyMap = {
                'q': "js-logo",
                'w': "ts-logo",
                'e': "react-logo",
                'a': "svelte-logo",
                's': "angular-logo",
                'd': "vue-logo",
                'z': "aurelia-logo",
                'x': "node-logo",
                'c': "ember-logo",
            };

            const playerLogo = keyMap[event.key as keyof typeof keyMap];
            if (typeof playerLogo === 'undefined') {
                return;
            }

            if(!player1Logo){
                setPlayer1Logo(playerLogo);
            } else if(!player2Logo && player1Logo !== playerLogo) {
                setPlayer2Logo(playerLogo);

                const countdownTimer = setInterval(() => {
                    setSeconds((prevSeconds) => {
                      if (prevSeconds === 1) {
                        handleTimeout();
                        clearInterval(countdownTimer);
                        return 0;
                      }
                      return prevSeconds - 1;
                    });
                  }, 1000); // Update every 1 second (1000 milliseconds)
            }
        };
      
        window.addEventListener('keydown', handleKeyPress);
    
  
        // Cleanup
        return () => {
          window.removeEventListener('keydown', handleKeyPress);
        };
    }, [ player1Logo, player2Logo]); // The empty dependency array ensures that the listener is added and removed properly
  
  return (
    <div>
        {!nextPage &&
        <div className="players-select-wrapper">
            <h1 className="text-white text-normal mb-0">Choose Your Avatar</h1>
            <h1 className="text-white text-normal mt-0">Select an avatar to represent you on the board.</h1>
            <h2 className="text-white text-normal">Press the button that corresponds to the avatar that you want.</h2>
            <div className="logos-board-wrapper">
                <div>
                <h1 className="text-white">Player 1</h1>
                {player1Logo && <div className={`player-logo ${player1Logo}`}></div>}
                </div>
                <div className="logos-board"> 
                    <div className="row">
                        <div className={`logo-square-wrapper ${(player1Logo === 'js-logo' ||player2Logo === 'js-logo' )&& 'js-selected' }`}>
                          <button className='logo-square js-logo'></button>
                        </div>
                        <div className={`logo-square-wrapper ${(player1Logo === 'ts-logo' ||player2Logo === 'ts-logo' )&& 'ts-selected' }`}>
                            <button className="logo-square ts-logo"></button>
                        </div>
                        <div className={`logo-square-wrapper ${(player1Logo === 'react-logo' ||player2Logo === 'react-logo' )&& 'react-selected' }`}>
                            <button className="logo-square react-logo"></button>
                        </div>
                    </div>
                    <div className="row">
                        <div className={`logo-square-wrapper ${(player1Logo === 'svelte-logo' ||player2Logo === 'svelte-logo' )&& 'svelte-selected' }`}>
                            <button className="logo-square svelte-logo"></button>
                        </div>
                        <div className={`logo-square-wrapper ${(player1Logo === 'angular-logo' ||player2Logo === 'angular-logo' )&& 'angular-selected' }`}>
                            <button className="logo-square angular-logo"></button>
                        </div>
                        <div className={`logo-square-wrapper ${(player1Logo === 'vue-logo' ||player2Logo === 'vue-logo' )&& 'vue-selected' }`}>
                            <button className="logo-square vue-logo"></button>
                        </div>
                    </div>
                    <div className="row">
                        <div  className={`logo-square-wrapper ${(player1Logo === 'aurelia-logo' ||player2Logo === 'aurelia-logo' )&& 'aurelia-selected' }`}>
                            <button className="logo-square aurelia-logo"></button>
                        </div>
                        <div className={`logo-square-wrapper ${(player1Logo === 'node-logo' ||player2Logo === 'node-logo' )&& 'node-selected' }`}>
                            <button className="logo-square node-logo"></button>
                        </div>
                        <div className={`logo-square-wrapper ${(player1Logo === 'ember-logo' ||player2Logo === 'ember-logo' )&& 'ember-selected' }`}>
                            <button className="logo-square ember-logo"></button>
                        </div>
                    </div>
                </div>
                <div>
                <h1 className="text-white">Player 2</h1>
                {player2Logo &&  <div className={`player-logo ${player2Logo}`}></div>}
                </div>
            </div>
            {player1Logo && player2Logo && <h1 className="game-start-timer">Game will start in {seconds} sec</h1>}
        </div>}
        {nextPage && <UltimateBoard  player1={player1Logo} player2={player2Logo} />}
    </div>
  );
};

export default PlayersSelectPage;
