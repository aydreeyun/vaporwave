import { connect } from 'react-redux';
import Discover from './discover';
import { logout } from '../../actions/session_actions';
import { fetchUsers } from '../../actions/user_actions';
import { fetchSongs } from '../../actions/song_actions';

const mSTP = state => {
  return {
    // user: state.entities.users[state.session.id],
    songs: Object.values(state.entities.songs),
  };
};

const mDTP = dispatch => {
  return {
    logout: () => dispatch(logout()),
    fetchUsers: () => dispatch(fetchUsers()),
    fetchSongs: () => dispatch(fetchSongs()),
  };
};

export default connect(mSTP, mDTP)(Discover);