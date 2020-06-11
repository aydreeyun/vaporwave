import * as SongAPIUtil from '../util/song_api_util';
import { receiveQueue } from './music_player_actions';

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

export const fetchSongs = () => dispatch => {
  return SongAPIUtil.fetchSongs()
    .then(songs => dispatch(receiveSongs(songs)))
      .then(res => window.localStorage.setItem('songs', JSON.stringify(res.songs)))
};

export const fetchSong = songId => dispatch => {
  return SongAPIUtil.fetchSong(songId)
    .then(song => dispatch(receiveSong(song)));
};

export const createSong = song => dispatch => {
  return SongAPIUtil.createSong(song)
    .then(song => dispatch(receiveSong(song)));
};

export const updateSong = (song, id) => dispatch => {
  return SongAPIUtil.updateSong(song, id)
    .then(song => dispatch(receiveSong(song)));
};

export const deleteSong = songId => dispatch => {
  return SongAPIUtil.deleteSong(songId)
    .then(() => dispatch(removeSong(songId)));
};
