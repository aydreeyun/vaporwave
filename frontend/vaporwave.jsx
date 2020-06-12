import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { 
  faUser,
  faSearch,
  faAngleDown,
  faBell,
  faEnvelope,
  faEllipsisH,
  faCaretLeft,
  faUserCheck,
  faUserPlus,
  faTrash,
  faHeart,
  faRetweet,
  faShareSquare,
  faBars,
  faPlay,
  faUserFriends,
  faMusic,
  faCommentAlt,
  faCamera,
  faExternalLinkAlt,
  faPause,
  faStepBackward,
  faStepForward,
  faVolumeUp,
  faVolumeDown,
  faVolumeMute,
  faRandom,
  faRedoAlt,
  faPencilAlt
} from '@fortawesome/free-solid-svg-icons';

library.add(
  fab,
  faUser,
  faSearch,
  faAngleDown,
  faBell,
  faEnvelope,
  faEllipsisH,
  faCaretLeft,
  faUserCheck,
  faUserPlus,
  faTrash,
  faHeart,
  faRetweet,
  faShareSquare,
  faBars,
  faPlay,
  faUserFriends,
  faMusic,
  faCommentAlt,
  faCamera,
  faExternalLinkAlt,
  faPause,
  faStepBackward,
  faStepForward,
  faVolumeUp,
  faVolumeDown,
  faVolumeMute,
  faRandom,
  faRedoAlt,
  faPencilAlt
);

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
});