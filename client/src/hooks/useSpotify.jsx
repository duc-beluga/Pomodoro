import { useState, useEffect } from "react";
import axios from "axios";

const useSpotify = () => {
  const [accessToken, setAccessToken] = useState("");
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

  const handleSearch = (searchInput) => {
    axios
      .post(`${VITE_BACKEND_URL}/auth/spotify`, {
        accessToken: accessToken,
        searchInput: searchInput,
      })
      .then((res) => {
        console.log(res.data.items);
        setSongs(res.data.items);
      })
      .catch((err) => console.log(err));
  };

  return { handleSearch, songs, setSongs };
};

export default useSpotify;
