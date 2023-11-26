import express from "express";
import cors from "cors";
import morgan from "morgan";
import passport from "passport";
import session from "express-session";

import { sessionConfig } from "./config/session.js";
import { corsConfig } from "./config/cors.js";
import { GitHub } from "./config/auth.js";
import authRoute from "./routes/auth.js";

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors(corsConfig));
app.use(session(sessionConfig));
app.use(passport.initialize());
app.use(passport.session());
passport.use(GitHub);

passport.serializeUser((user, done) => {
  console.log("serializeUser", user);
  done(null, user);
});

passport.deserializeUser((user, done) => {
  console.log("deserializeUser", user);
  done(null, user);
});

app.use("/auth", authRoute);
app.get("/", (req, res) => {
  res.redirect(process.env.CLIENT_URL);
});

app.listen(3000, () => console.log("server is running on port 3000"));
