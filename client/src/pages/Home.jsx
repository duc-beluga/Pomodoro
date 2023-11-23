import React, { useEffect, useState } from "react";
import Counter from "../components/Counter";
import Navbar from "../components/Navbar";
import VidBackground from "../components/VidBackground";
import Player from "../components/Player";
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
          <div>
            <Counter studyTime={20} breakTime={5} />
            <Player play={play} curSong={curSong} setPlay={setPlay} />
          </div>
          <div className="flex flex-col gap-y-5 m-5">
            <form onSubmit={handleClickTest}>
              <input
                type="text"
                onChange={(e) => setSearchInput(e.target.value)}
                className="p-2 rounded-md shadow-lg bg-slate-800 text-white opacity-80"
                placeholder="Search song..."
              />
            </form>
            <div className=" flex flex-col gap-3 text-white w-[464px] h-[428px]">
              {songs.map((song) => (
                <div key={song.uri} className="group rounded-md flex gap-x-5">
                  <img
                    src={song.album.images[0].url}
                    alt="album-img"
                    className="object-cover h-8 w-8 rounded-md opacity-50 group-hover:opacity-100"
                    onClick={() => {
                      setCurSong(song.uri);
                      setPlay(true);
                    }}
                  />
                  <div className="flex justify-center items-center opacity-50 group-hover:opacity-100">
                    {`${song.name} - ${song.artists[0].name}`}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
