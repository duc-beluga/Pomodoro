export const spotifyConfig = {
  redirectUri: "/",
  clientId: process.env.SPOTIFY_CLIENT_ID,
  clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
};

export const spotifyConfigTwo = {
  response_type: "code",
  clientId: process.env.SPOTIFY_CLIENT_ID,
  // clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
  scope: "user-read-private user-read-email",
  redirect_uri: "/",
  state: "asdasd",
};
