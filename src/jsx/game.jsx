/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import GameControls from "./gameControls";
import GameVisuals from "./gamevisuals";
import BackgroundMusic from "./backgroundMusic";
import "../css/game.css";
import ErrorTab from "./errorTab";
import rock_left from "../assets/images/rock left.png";
import rock_right from "../assets/images/rock right.png";
import paper_left from "../assets/images/paper left.png";
import paper_right from "../assets/images/paper right.png";
import scissors_left from "../assets/images/scissors left.png";
import scissors_right from "../assets/images/scissors right.png";

function Game() {
  const [selectedOption, setSelectedOption] = useState("");
  const [userOption, setUserOption] = useState("");
  const [SuserOption, SsetUserOption] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [userScore, setUserScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const options = ["rock", "paper", "scissors"];
  const [userImage, setUserImage] = useState("");
  const [computerImage, setComputerImage] = useState("");
  const [isWin, setIsWin] = useState("");
  const [isMuted, setIsMuted] = useState(false);

  const computerOption = options[Math.floor(Math.random() * options.length)];

  const StartGame = (e) => {
    e.preventDefault();
    if (selectedOption === "") {
      setErrorMsg("Please select an option");
    } else {
      if (selectedOption === computerOption) {
        // alert("It's a draw");
        setIsWin("DRAW");
      } else if (
        (selectedOption === "rock" && computerOption === "scissors") ||
        (selectedOption === "paper" && computerOption === "rock") ||
        (selectedOption === "scissors" && computerOption === "paper")
      ) {
        setIsWin("WIN");
        setUserScore(userScore + 1);
      } else {
        setIsWin("LOSE");
        setComputerScore(computerScore + 1);
      }

      if (selectedOption === "rock") {
        setUserImage(rock_left);
      } else if (selectedOption === "paper") {
        setUserImage(paper_left);
      } else {
        setUserImage(scissors_left);
      }

      if (computerOption === "rock") {
        setComputerImage(rock_right);
      } else if (computerOption === "paper") {
        setComputerImage(paper_right);
      } else {
        setComputerImage(scissors_right);
      }

      setUserOption(selectedOption);
      SsetUserOption(computerOption);
    }
  };

  useEffect(() => {
    if (errorMsg) {
      const timer = setTimeout(() => {
        setErrorMsg("");
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [errorMsg]);

  return (
    <>
      {errorMsg && <ErrorTab error_msg={errorMsg} />}
      <div className="game">
        <BackgroundMusic isMuted={isMuted} />
        <GameControls
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
          StartGame={StartGame}
          userScore={userScore}
          computerScore={computerScore}
          setIsMuted={setIsMuted}
          isMuted={isMuted}
        />
        <GameVisuals
          userImage={userImage}
          computerImage={computerImage}
          selectedOption={userOption}
          computerOption={SuserOption}
          isWin={isWin}
        />
      </div>
    </>
  );
}
export default Game;
