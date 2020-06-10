import { RECEIVE_CURRENT_SONG, RECEIVE_PREVIOUS_SONG, PLAY_SONG, PAUSE_SONG, RESTART_SONG } from '../actions/music_player_actions';

const defaultState = {
  playing: false,
  played: [],
  currentSongId: null,
}

const musicPlayerReducer = (state = defaultState, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);

  switch(action.type) {
    case RECEIVE_CURRENT_SONG:
      newState.currentSongId = action.songId;
      return newState;
    case RECEIVE_PREVIOUS_SONG:
      newState.played.push(action.songId);
      return newState;
    case PLAY_SONG:
      newState.playing = true;
      return newState;
    case PAUSE_SONG:
      newState.playing = false;
      return newState;
    default:
      return state;
  }
};

export default musicPlayerReducer;