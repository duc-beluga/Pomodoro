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
      //   styles={{
      //     bgColor: "#D0D0D0",
      //     //   sliderColor: "#FFFFFF",
      //     //   loaderColor: "#FFFFFF",
      //     //   sliderHandleColor: "#FFFFFF",
      //     //   activeColor: "#FFFFFF",
      //     //   altColor: "#FFFFFF",
      //     //   color: "#FFFFFF",
      //     //   sliderTrackColor: "#FFFFFF",
      //     //   trackArtistColor: "#FFFFFF",
      //     trackNameColor: "#E0E0E0",
      //     //   sliderHandleBorderRadius: "0.375rem",
      //     //   sliderTrackBorderRadius: "0.375rem",
      //   }}
    />
  );
};

export default Player;
