import React, { useEffect, useState } from "react";
import "../css/endGame.css";
import { useNavigate } from "react-router-dom";

function EndGame() {
  const [message, setMessage] = useState("");
  const [msg, setMsg] = useState("");
  const player = localStorage.getItem("name");
  const com = localStorage.getItem("compName");
  const computerScore = localStorage.getItem("computerScore");
  const userScore = localStorage.getItem("userScore");
  const navigate = useNavigate();

  const playAgain = () => {
    localStorage.removeItem("name");
    localStorage.removeItem("compName");
    localStorage.removeItem("computerScore");
    localStorage.removeItem("userScore");
    navigate("/");
    window.location.reload(1);
  };
  useEffect(() => {
    if (userScore > computerScore) {
      setMessage("You won !!🎊");
      setMsg("W");
    } else if (computerScore > userScore) {
      setMessage("Game Over \n You Lost");
      setMsg("L");
    } else {
      setMessage("It's a Tie");
      setMsg("D");
    }
  });
  return (
    <div className="endGame">
      <form action="">
        <h1 className={msg}>{message}</h1>
        <h2></h2>
        <p>
          {player}'s Score: {userScore === undefined ? "0" : `${userScore}`}
        </p>
        <p>
          {com}'s Score:{" "}
          {computerScore === undefined ? "0" : `${computerScore}`}
        </p>
        <button onClick={playAgain}>Play Again</button>
      </form>
    </div>
  );
}
export default EndGame;
