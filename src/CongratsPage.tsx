import { useEffect } from "react";

const CongratsPage:  React.FC<{ultimateWinner:string}> = ({ultimateWinner}) => {

  useEffect(() => {
    const handleKeyPress = () => {
      // Check if any key is pressed (you can specify a particular key if needed)
     window.location.reload();
    };

    // Add the event listener when the component mounts
    window.addEventListener("keydown", handleKeyPress);

    // Remove the event listener when the component unmounts to avoid memory leaks
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []); // The empty dependency array ensures that the listener is added and removed properly


  return (   
        <div className="congrats-wrapper">
            <div className="congrats-border"></div>
             <div className="congrats-content">
                <div className="congrats-text">
                    <h1>Congrats</h1>
                </div>
                <div className="winner-text">
                <div className={`winner-logo ${ultimateWinner}`}></div><h1 className="text-white">Player wins the game!</h1>
                </div>
                <h1 className="text-white">Press any button<br />to start a new game</h1>
            </div>
        </div>
  );
};

export default CongratsPage;
