import * as SongAPIUtil from '../util/song_api_util';

export const RECEIVE_SONGS = "RECEIVE_SONGS";
export const RECEIVE_SONG = "RECEIVE_SONG";
export const REMOVE_SONG = "REMOVE_SONG";

const receiveSongs = songs => {
  return {
    type: RECEIVE_SONGS,
    songs
  };
};

const receiveSong = song => {
  return {
    type: RECEIVE_SONG,
    song
  };
};

const removeSong = songId => {
  return {
    type: REMOVE_SONG,
    songId
  };
};

export const fetchSongs = userId => dispatch => {
  return SongAPIUtil.fetchSongs(userId)
    .then(songs => dispatch(receiveSongs(songs)));
};

export const fetchSong = songId => dispatch => {
  return SongAPIUtil.fetchSong(songId)
    .then(song => dispatch(receiveSong(song)));
};

export const createSong = song => dispatch => {
  return SongAPIUtil.createSong(song)
    .then(song => dispatch(receiveSong(song)));
};

export const deleteSong = songId => dispatch => {
  return SongAPIUtil.deleteSong(songId)
    .then(() => dispatch(removeSong(songId)));
};
