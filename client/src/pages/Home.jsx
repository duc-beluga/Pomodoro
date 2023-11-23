import React, { useEffect, useState } from "react";
import Counter from "../components/Counter";
import Navbar from "../components/Navbar";
import VidBackground from "../components/VidBackground";
import Player from "../components/Player";
import Searcher from "../components/Searcher";
import axios from "axios";

const Home = () => {
  const [accessToken, setAccessToken] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [songs, setSongs] = useState([]);
  const [play, setPlay] = useState(false);
  const [curSong, setCurSong] = useState("");

  useEffect(() => {
    console.log(import.meta.env.VITE_SPOTIFY_CLIENT_ID);
    console.log(import.meta.env.VITE_SPOTIFY_CIENT_SECRET);
    const tokenURL = "https://accounts.spotify.com/api/token";
    const authParameters = new URLSearchParams({
      grant_type: "client_credentials",
      client_id: import.meta.env.VITE_SPOTIFY_CLIENT_ID,
      client_secret: import.meta.env.VITE_SPOTIFY_CIENT_SECRET,
    });

    axios
      .post(tokenURL, authParameters.toString(), {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      })
      .then((res) => {
        console.log(res.data.access_token);
        setAccessToken(res.data.access_token);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleClickTest = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/auth/spotify", {
        accessToken: accessToken,
        searchInput: searchInput,
      })
      .then((res) => {
        console.log(res.data.items);
        setSongs(res.data.items);
      })
      .catch((err) => console.log(err));
  };

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
            handleClickTest={handleClickTest}
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
