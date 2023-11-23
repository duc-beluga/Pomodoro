import React, { useEffect, useState } from "react";
import Counter from "../components/Counter";
import Navbar from "../components/Navbar";
import VidBackground from "../components/VidBackground";
import axios from "axios";

const Home = () => {
  const [accessToken, setAccessToken] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [songs, setSongs] = useState([]);
  useEffect(() => {
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

  const handleSearchSubmit = () => {};
  return (
    <div className="flex justify-center items-center flex-col h-screen">
      <Navbar />
      <div className="relative w-full h-full ">
        <VidBackground />
        <div className="absolute flex justify-center gap-x-40 items-center top-0 right-0 left-0 bottom-0 bg-blackOverlay">
          {/* <div className="flex justify-between gap-5 p-2 rounded-md"> */}
          <Counter studyTime={20} breakTime={5} />
          <div className="flex flex-col gap-y-5 m-5">
            <form onSubmit={handleClickTest}>
              <input
                type="text"
                onChange={(e) => setSearchInput(e.target.value)}
                className="p-2 rounded-md shadow-lg bg-slate-800 text-white opacity-80"
                placeholder="Search song..."
              />
            </form>
            <div className="flex flex-col gap-3 text-white w-[464px] h-[428px]">
              {songs.map((song) => (
                <div className="rounded-md flex gap-x-5">
                  <img
                    src={song.album.images[0].url}
                    alt="album-img"
                    className="object-cover h-8 w-8 rounded-md opacity-50 hover:opacity-100"
                  />
                  <div className="flex justify-center items-center">
                    {song.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
