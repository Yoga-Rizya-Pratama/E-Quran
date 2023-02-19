"use client";
import { useState } from "react";
import { BsPlayCircle, BsStopCircle } from "react-icons/bs";

export default function PlayAudio({ fileAudio, color }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio] = useState(
    typeof Audio !== "undefined" && new Audio(fileAudio)
  );

  const playAudio = () => {
    audio.volume = 0.2;
    audio.play();
    setIsPlaying(true);
  };

  const stopAudio = () => {
    audio.pause();
    audio.currentTime = 0;
    setIsPlaying(false);
  };

  return (
    <div>
      {isPlaying ? (
        <BsStopCircle
          onClick={() => stopAudio()}
          className={`${color} hover:w-6 duration-300 cursor-pointer`}
        />
      ) : (
        <BsPlayCircle
          onClick={() => playAudio()}
          className={`${color} hover:w-6 duration-300 cursor-pointer`}
        />
      )}
    </div>
  );
}
