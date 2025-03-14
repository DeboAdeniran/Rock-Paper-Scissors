// import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./jsx/home";
import GameControls from "./jsx/gameControls";
import Game from "./jsx/game";
import HowToPlay from "./jsx/howToPlay";
import EndGame from "./jsx/endGame";
import "./css/modal.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game" element={<Game />} />
        <Route path="/endGame" element={<EndGame />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
