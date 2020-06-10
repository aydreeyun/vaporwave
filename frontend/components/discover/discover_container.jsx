import { connect } from 'react-redux';
import Discover from './discover';
import { fetchUsers } from '../../actions/user_actions';
import { fetchSongs } from '../../actions/song_actions';
import { receiveCurrentSong } from '../../actions/music_player_actions';

const mSTP = state => {
  return {
    users: state.entities.users,
    songs: Object.values(state.entities.songs),
    currentUser: state.entities.users[state.session.id],
  };
};

const mDTP = dispatch => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
    fetchSongs: () => dispatch(fetchSongs()),
    receiveCurrentSong: songId => dispatch(receiveCurrentSong(songId)),
  };
};

export default connect(mSTP, mDTP)(Discover);