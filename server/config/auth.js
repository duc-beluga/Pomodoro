import GitHubStrategy from "passport-github2";

const options = {
  clientID: process.env.GITHUB_CLIENT_ID,
  clientSecret: process.env.GITHUB_CLIENT_SECRET,
  // callbackURL: 'http://localhost:3000/auth/github/callback'
};

const verify = async (accessToken, refreshToken, profile, callback) => {
  const user = { id: 123, name: "John Doe" };
  console.log(user);
  callback(null, user);
};

export const GitHub = new GitHubStrategy(options, verify);
