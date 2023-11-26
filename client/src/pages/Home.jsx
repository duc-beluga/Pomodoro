import React, { useState } from "react";
import Counter from "../components/Counter";
import Navbar from "../components/Navbar";
import VidBackground from "../components/VidBackground";
import Player from "../components/Player";
import Searcher from "../components/Searcher";
import useSpotify from "../hooks/useSpotify";

const Home = () => {
  const { handleSearch, songs } = useSpotify();
  const [searchInput, setSearchInput] = useState("");
  const [play, setPlay] = useState(false);
  const [curSong, setCurSong] = useState("");

  return (
    <div className="flex justify-center items-center flex-col h-screen">
      <Navbar />
      <div className="relative w-full h-full ">
        <VidBackground />
        <div className="absolute flex justify-center gap-x-40 items-center top-0 right-0 left-0 bottom-0 bg-blackOverlay">
          <div className="flex flex-col justify-center items-center">
            <Counter studyTime={20} breakTime={5} />
            <Player play={play} curSong={curSong} setPlay={setPlay} />
          </div>
          <Searcher
            searchInput={searchInput}
            handleSearch={handleSearch}
            setSearchInput={setSearchInput}
            songs={songs}
            setCurSong={setCurSong}
            setPlay={setPlay}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
