import { connect } from 'react-redux';
import MusicPlayer from './music_player';
import { receiveCurrentSong, receivePreviousSong, receiveNextSong, playSong, pauseSong, receiveQueue } from '../../actions/music_player_actions';

const mSTP = state => {
  const currentSong = state.entities.songs[state.ui.musicPlayer.currentSongId] ?
    state.entities.songs[state.ui.musicPlayer.currentSongId] : null;
  let artist = "";
  if (currentSong) {
    artist = state.entities.users[currentSong.artist_id];
  }

  return {
    songs: state.entities.songs,
    currentSong: currentSong,
    artist: artist,
    playing: state.ui.musicPlayer.playing,
    played: state.ui.musicPlayer.played,
    queue: state.ui.musicPlayer.queue,
  };
};

const mDTP = dispatch => {
  return {
    receiveCurrentSong: songId => dispatch(receiveCurrentSong(songId)),
    receivePreviousSong: songId => dispatch(receivePreviousSong(songId)),
    receiveNextSong: songId => dispatch(receiveNextSong(songId)),
    playSong: () => dispatch(playSong()),
    pauseSong: () => dispatch(pauseSong()),
    receiveQueue: songs => dispatch(receiveQueue(songs)),
  };
};

export default connect(mSTP, mDTP)(MusicPlayer);
