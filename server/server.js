import express from "express";
import cors from "cors";
import morgan from "morgan";
import passport from "passport";
import session from "express-session";

import { sessionConfig } from "./config/session.js";
import { GitHub } from "./config/auth.js";
import authRoute from "./routes/auth.js";

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(session(sessionConfig));
app.use(passport.initialize());
app.use(passport.session());
passport.use(GitHub);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

app.use("/auth", authRoute);
app.get("/", (req, res) => {
  res.redirect(process.env.CLIENT_URL);
});

app.listen(3000, () => console.log("server is running on port 3000"));
