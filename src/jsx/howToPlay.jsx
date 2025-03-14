import React from "react";
import "../css/howtoplay.css";

function HowToPlay({ CloseHTPmodel }) {
  const HandleModalOpen = (e) => {
    if (e.target.classList.contains("modal_overlay")) {
      CloseHTPmodel();
    }
  };
  return (
    <div className="modal_overlay" onClick={HandleModalOpen}>
      <div class="how-to-play">
        <h3>How to Play Rock, Paper, Scissors</h3>

        <h4>Objective</h4>
        <p>
          The goal of the game is to defeat your opponent by selecting a hand
          gesture that beats theirs according to the rules.
        </p>

        <h4>Rules</h4>
        <ul>
          <li>
            <strong>Rock</strong> (✊) beats <strong>Scissors</strong> (✌️)
          </li>
          <li>
            <strong>Scissors</strong> (✌️) beats <strong>Paper</strong> (✋)
          </li>
          <li>
            <strong>Paper</strong> (✋) beats <strong>Rock</strong> (✊)
          </li>
          <li>
            If both players choose the same option, the round is a{" "}
            <strong>Draw</strong>.
          </li>
        </ul>

        <h4>Game Flow</h4>
        <ol>
          <li>
            <strong>Choose Your Move</strong> - Click on{" "}
            <strong>Rock, Paper, or Scissors</strong> to make your selection.
          </li>
          <li>
            <strong>Start the Game</strong> - Press the{" "}
            <strong>Start Game</strong> button to play against the computer.
          </li>
          <li>
            <strong>See the Outcome</strong> - Your choice and the computer’s
            choice will be displayed, and the game will determine if you{" "}
            <strong>Win, Lose, or Draw</strong>.
          </li>
          <li>
            <strong>Track the Score</strong> - The scoreboard keeps track of
            your wins and losses.
          </li>
          <li>
            <strong>End the Game</strong> - Click <strong>End Game</strong> to
            reset the game at any time.
          </li>
        </ol>

        <h4>Winning Strategy</h4>
        <p>
          The computer selects its move randomly, so predicting patterns may
          help. Play multiple rounds and observe any tendencies in the
          computer’s choices.
        </p>

        <p>Enjoy the game and may the best strategist win! 🎮✨</p>
      </div>
    </div>
  );
}
export default HowToPlay;
