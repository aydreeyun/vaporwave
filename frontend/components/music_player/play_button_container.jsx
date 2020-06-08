import { connect } from 'react-redux';
import PlayButton from './play_button';
import { receiveCurrentSong, playSong, pauseSong, receivePreviousSong } from '../../actions/music_player_actions';

const mSTP = state => {
  return {
    playing: state.ui.musicPlayer.playing,
    currentSong: state.entities.songs[state.ui.musicPlayer.currentSongId]
  };
};

const mDTP = dispatch => {
  return {
    receiveCurrentSong: songId => dispatch(receiveCurrentSong(songId)),
    playSong: () => dispatch(playSong()),
    pauseSong: () => dispatch(pauseSong()),
    receivePreviousSong: songId => dispatch(receivePreviousSong(songId)),
  };
};

export default connect(mSTP, mDTP)(PlayButton);
