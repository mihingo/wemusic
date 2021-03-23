export const authEndpoint = "https://accounts.spotify.com/en/authorize";

const redirectUri = "http://localhost:3000/";

const clientId = "db5f98e37ff24d2da2da2001e53821bc";

const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;
