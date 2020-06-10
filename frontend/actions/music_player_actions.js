export const RECEIVE_CURRENT_SONG = "RECEIVE_CURRENT_SONG";
export const RECEIVE_PREVIOUS_SONG = "RECEIVE_PREVIOUS_SONG";
export const PLAY_SONG = "PLAY_SONG";
export const PAUSE_SONG = "PAUSE_SONG";
export const RESTART_SONG = "RESTART_SONG";

export const receiveCurrentSong = songId => {
  return {
    type: RECEIVE_CURRENT_SONG,
    songId
  };
};

export const receivePreviousSong = songId => {
  return {
    type: RECEIVE_PREVIOUS_SONG,
    songId
  };
};

export const playSong = () => {
  return {
    type: PLAY_SONG,
  };
};

export const pauseSong = () => {
  return {
    type: PAUSE_SONG,
  };
};
