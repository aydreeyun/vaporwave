import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

import { fetchSongs, fetchSong, createSong, deleteSong } from './actions/song_actions';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");

  // LOCAL STORAGE
  let songs;
  let users;
  if (window.localStorage.getItem("songs")) {
    songs = JSON.parse(window.localStorage.getItem('songs'));
  }
  if (window.localStorage.getItem("users")) {
    users = JSON.parse(window.localStorage.getItem('users'));
  }
  // LOCAL STORAGE

  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: users,
        songs: songs,
      },
      session: { id: window.currentUser.id }
    };
    
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  

  ReactDOM.render(<Root store={store} />, root);

  // TESTS
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.fetchSongs = fetchSongs;
  window.fetchSong = fetchSong;
  window.createSong = createSong;
  window.deleteSong = deleteSong;
  window.songs = songs;
  window.users = users;
});