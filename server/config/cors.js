export const corsConfig = {
  origin: process.env.CLIENT_URL,
  methods: "GET,POST,PUT,DELETE,PATCH",
  credentials: true,
};

console.log(process.env.CLIENT_URL);
console.log(process.env.GITHUB_CLIENT_ID);
console.log(process.env.GITHUB_CLIENT_SECRET);
console.log(process.env.SESSION_SECRET);
console.log(process.env.SPOTIFY_CLIENT_ID);
console.log(process.env.SPOTIFY_CIENT_SECRET);
