import { connect } from 'react-redux';
import Discover from './discover';
import { fetchUsers } from '../../actions/user_actions';
import { fetchSongs } from '../../actions/song_actions';

const mSTP = state => {
  return {
    users: state.entities.users,
    songs: Object.values(state.entities.songs),
  };
};

const mDTP = dispatch => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
    fetchSongs: () => dispatch(fetchSongs()),
  };
};

export default connect(mSTP, mDTP)(Discover);