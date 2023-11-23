import React from "react";
import SpotifyPlayer from "react-spotify-web-playback";

const Player = ({ play, curSong, setPlay }) => {
  return (
    <SpotifyPlayer
      token={import.meta.env.VITE_ACCESS_TOKEN}
      showSaveIcon
      callback={(state) => {
        if (!state.isPlaying) setPlay(false);
      }}
      play={play}
      uris={curSong}
    />
  );
};

export default Player;
