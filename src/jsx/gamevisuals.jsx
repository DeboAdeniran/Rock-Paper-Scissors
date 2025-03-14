import React from "react";
import "../css/gameVisuals.css";

function GameVisuals({
  userImage,
  computerImage,
  computerOption,
  selectedOption,
  isWin,
}) {
  return (
    <div className="game_visuals">
      <div
        className={`background_color ${
          isWin === "WIN"
            ? "win"
            : isWin === "LOSE"
            ? "lose"
            : isWin === "DRAW"
            ? "draw"
            : ""
        }`}
      ></div>

      <div className="user_side">
        <h1
          style={
            isWin === "WIN"
              ? { color: "#007200" }
              : isWin === "LOSE"
              ? { color: "#720000" }
              : isWin === "DRAW"
              ? { color: "#fff" }
              : {}
          }
        >
          {isWin}
        </h1>
        <img src={userImage} alt="" />
        <p>{selectedOption} </p>
      </div>

      <div className="computer_side">
        <h1
          style={
            isWin === "WIN"
              ? { color: "#720000" }
              : isWin === "LOSE"
              ? { color: "#007200" }
              : isWin === "DRAW"
              ? { color: "#fff" }
              : {}
          }
        >
          {isWin === "WIN"
            ? "LOSE"
            : isWin === "LOSE"
            ? "WIN"
            : isWin === "DRAW"
            ? "DRAW"
            : ""}
        </h1>
        <img src={computerImage} alt="" />
        <p>{computerOption} </p>
      </div>
    </div>
  );
}
export default GameVisuals;
