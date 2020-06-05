import { connect } from 'react-redux';
import Upload from './upload';
import { createSong } from '../../actions/song_actions';

const mSTP = state => {
  return {
    currentUser: state.entities.users[state.session.id],
  };
};

const mDTP = dispatch => {
  return {
    createSong: song => dispatch(createSong(song)),
  };
};

export default connect(mSTP, mDTP)(Upload);
