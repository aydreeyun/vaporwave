import { connect } from 'react-redux';
import MusicPlayer from './music_player';
import { receiveCurrentSong, receivePreviousSong, playSong, pauseSong, restartSong } from '../../actions/music_player_actions';

const mSTP = state => {
  const currentSong = state.entities.songs[state.ui.musicPlayer.currentSongId];
  const artist = state.entities.users[currentSong.artist_id];

  return {
    currentSong: currentSong,
    artist: artist,
    playing: state.ui.musicPlayer.playing,
  };
};

const mDTP = dispatch => {
  return {
    receiveCurrentSong: songId => dispatch(receiveCurrentSong(songId)),
    receivePreviousSong: songId => dispatch(receivePreviousSong(songId)),
    playSong: () => dispatch(playSong()),
    pauseSong: () => dispatch(pauseSong()),
    restartSong: () => dispatch(restartSong()),
  };
};

export default connect(mSTP, mDTP)(MusicPlayer);
