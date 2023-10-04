import { useEffect } from "react";

const EqualityPage:  React.FC = () => {

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
        <div className="equality-wrapper">
            <div className="equality-border"></div>
             <div className="equality-content">
                <p className="equality-text">It's a tie!</p>
                <p className="equality-description">Both players have flexed their TIC-TAC-TOH talents, but this time, victory decided to take an [e-spres-oh] break.</p>
                <p className="equality-next-action">Press any button<br />to start a new game</p>
            </div>
        </div>
  );
};

export default EqualityPage;
