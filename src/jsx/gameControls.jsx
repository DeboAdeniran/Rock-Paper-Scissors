import React, { useState } from "react";
import HowToPlay from "./howToPlay";
import faq from "../assets/svg/faq.svg";
import verfied from "../assets/svg/verified.svg";
// eslint-disable-next-line no-unused-vars
import expand from "../assets/svg/expand.svg";
import volume from "../assets/svg/volume.svg";
import rock from "../assets/svg//rock.png";
import paper from "../assets/svg/paper.svg";
import scissors from "../assets/svg/scissors.svg";
import no_volume from "../assets/svg/no_volume.svg";
import { useNavigate } from "react-router-dom";

function GameControls({
  userScore,
  computerScore,
  selectedOption,
  setSelectedOption,
  StartGame,
  isMuted,
  setIsMuted,
}) {
  const [isHTPModalOpen, setHTPModalOpen] = useState();
  const name = localStorage.getItem("name");
  const compName = localStorage.getItem("compName");
  const navigate = useNavigate();

  const OpenHTPModal = () => {
    setHTPModalOpen(true);
  };
  const CloseHTPmodel = () => {
    setHTPModalOpen(false);
  };

  const EndGame = () => {
    navigate("/endGame");
    localStorage.setItem("userScore", userScore);
    localStorage.setItem("computerScore", computerScore);
  };
  return (
    <>
      {isHTPModalOpen && <HowToPlay CloseHTPmodel={CloseHTPmodel} />}
      <div className="game-controls">
        <form onSubmit={(e) => e.preventDefault()}>
          <div>
            <p>Rock Paper Scissors</p>
            <label htmlFor="">Input in all fields</label>
          </div>
          <div className="input-group">
            <label htmlFor="">RPS</label>
            {/* <input type="text" placeholder="" /> */}
            <div className="rps_button">
              <button
                className={selectedOption === "rock" ? "active" : ""}
                onClick={(e) => {
                  e.preventDefault();
                  setSelectedOption("rock");
                }}
              >
                Rock <img src={rock} alt="" style={{ width: "22px" }} />
              </button>
              <button
                className={selectedOption === "paper" ? "active" : ""}
                onClick={(e) => {
                  e.preventDefault();
                  setSelectedOption("paper");
                }}
              >
                Paper <img src={paper} alt="" />
              </button>
              <button
                className={selectedOption === "scissors" ? "active" : ""}
                onClick={(e) => {
                  e.preventDefault();
                  setSelectedOption("scissors");
                }}
              >
                Scissors <img src={scissors} alt="" />
              </button>
            </div>
          </div>
          {/* <div className="input-group">
          <label htmlFor="">Enter a name for the computer:</label>
          <input type="text" placeholder="" />
        </div> */}

          <button type="submit" onClick={StartGame}>
            Start Game
          </button>
          <div>
            <label htmlFor="">Scoreboard</label>
            <div className="scoreboard">
              <div className="input-group">
                <label htmlFor="">{name} </label>
                <input type="text" placeholder={userScore} readOnly />
              </div>
              <div className="input-group">
                <label htmlFor="">{compName} </label>
                <input type="text" placeholder={computerScore} readOnly />
              </div>
            </div>
          </div>
          <button onClick={EndGame}>End Game</button>

          <div className="settings">
            <button className="button_label" onClick={OpenHTPModal}>
              How to Play <img src={faq} alt="" />
            </button>
            <div>
              <button className="button_label">
                <img src={verfied} alt="" />
              </button>
              {/* <button className="button_label">
                <img src={expand} alt="" />
              </button> */}
              <button
                className="button_label"
                onClick={() => setIsMuted(!isMuted)}
              >
                <img src={isMuted ? `${no_volume}` : `${volume}`} alt="" />
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
export default GameControls;
