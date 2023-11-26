import express from "express";
import passport from "passport";
import SpotifyWebApi from "spotify-web-api-node";
import { spotifyConfig, spotifyConfigTwo } from "../config/spotify.js";
import axios from "axios";
import querystring from "querystring";

const router = express.Router();

router.get("/login/success", (req, res) => {
  if (req.user) {
    res.status(200).json({ success: true, user: req.user });
  }
});

router.get("/login/failed", (req, res) => {
  res.status(401).json({ success: true, message: "login failed" });
});

router.get("/logout", (req, res, next) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }

    req.session.destroy((err) => {
      res.clearCookie("connect.sid");

      res.json({ status: "logout", user: {} });
    });
  });
});

router.post("/spotify", async (req, res) => {
  const { accessToken, searchInput } = req.body;
  axios
    .get(
      "https://api.spotify.com/v1/search?q=" +
        searchInput +
        "&type=track&limit=10",
      {
        headers: {
          Authorization: "Bearer " + accessToken,
        },
      }
    )
    .then((response) => res.status(200).json(response.data.tracks))
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

router.get("/spotify", async (req, res) => {
  res.redirect(
    "https://accounts.spotify.com/authorize?" +
      querystring.stringify(spotifyConfigTwo)
  );
});

router.get(
  "/github",
  passport.authenticate("github", {
    scope: ["read:user"],
  })
);

router.get(
  "/github/callback",
  passport.authenticate("github", {
    successRedirect: "/",
    failureRedirect: "/",
  })
);

export default router;
