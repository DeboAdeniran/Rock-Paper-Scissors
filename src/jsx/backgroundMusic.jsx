import React, { useEffect, useRef } from "react";
import arcade from "../assets/audio/arcade.mp3";

function BackgroundMusic({ isMuted }) {
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play().catch((err) => {
        console.log("AutoPlay failed: ", err);
      });
    }
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.muted = isMuted;
    }
  }, [isMuted]);

  return <audio ref={audioRef} src={arcade} loop autoPlay />;
}

export default BackgroundMusic;
