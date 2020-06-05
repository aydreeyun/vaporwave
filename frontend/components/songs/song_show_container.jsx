import { connect } from 'react-redux';
import SongShow from './song_show';
import { deleteSong, fetchSong } from '../../actions/song_actions';
import { openModal, closeModal } from '../../actions/modal_actions';

const mSTP = (state, ownProps) => {
  const song = state.entities.songs[ownProps.match.params.songId];
  const artist = state.entities.users[song.artist_id];

  return {
    song: song,
    artist: artist,
    currentUser: state.entities.users[state.session.id],
  };
};

const mDTP = dispatch => {
  return {
    deleteSong: songId => dispatch(deleteSong(songId)),
    fetchSong: songId => dispatch(fetchSong(songId)),
    openModal: modal => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal()),
  };
};

export default connect(mSTP, mDTP)(SongShow);
