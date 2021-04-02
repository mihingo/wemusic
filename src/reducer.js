export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  token:
    "BQDwGu_zDYv7Kf3taGBCrD5a9mUdk7t5_t8r0aLfECs2YT9ESnYwYrGUBkTB7WMPaDRrXbDiC4meyT7aG2saOT6MkHgkDnnJnSYjgAZTPuenGc22zwHZB49s5r5jHbf33WVS8HZgUFmYrg1oMisIXHXV78G4VcqclBYT1WmqSS8DQJwO",
};

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    default:
      return state;
  }
};

export default reducer;
