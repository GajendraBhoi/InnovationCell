import React, { useEffect, useState } from "react";
import { Howl, Howler } from "howler";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeUp, faVolumeMute } from "@fortawesome/free-solid-svg-icons";
import second from "./space_sound.m4a";
// import fingger from "./point_finger.gif";

const sound = new Howl({
  src: [second],
  loop: true,
  autoplay: false,
});

Howler.volume(0.5);

const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (isPlaying) {
      sound.pause();
    } else {
      sound.play();
    }
    setIsPlaying(!isPlaying);
    Howler.volume(isPlaying ? 0 : 0.5);
    if (!sound.autoplay) {
      sound.autoplay = true;
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    const currentVolume = sound.volume();
    sound.volume(currentVolume === 0 ? 0.5 : 0);
  };

  // const [hidden, setHidden] = useState(false);

  return (
    <>
      {/* <div
        style={{
          position: "fixed",
          bottom: "-10px",
          right: "0",
          display: "flex",
          alignItems: "center",
          zIndex: "9999",
          display: `${hidden ? "none" : ""}`,
        }}
      >
        <img src={fingger} alt="" height={200} />
      </div> */}
      <div
        style={{
          position: "fixed",
          bottom: "50px",
          right: "50px",
          display: "flex",
          alignItems: "center",
          zIndex: "9999",
        }}
      >
        <button
          onClick={togglePlay}
          style={{
            background: "none",
            border: "none",
            fontSize: "24px",
            color: "#fff",
          }}
        >
          {isPlaying ? (
            <FontAwesomeIcon color="#00e1bf" icon={faVolumeUp} />
          ) : (
            <FontAwesomeIcon color="#00e1bf" icon={faVolumeMute} />
          )}
        </button>
      </div>
    </>
  );
};

export default AudioPlayer;
