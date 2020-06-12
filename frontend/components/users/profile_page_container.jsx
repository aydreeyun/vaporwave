import { connect } from 'react-redux';
import ProfilePage from './profile_page';
import { updateUser, fetchUser } from '../../actions/user_actions';

const mSTP = (state, ownProps) => {
  const userSongs = Object.values(state.entities.songs)
    .filter(song => song.artist_id === parseInt(ownProps.match.params.userId));

  return {
    user: state.entities.users[ownProps.match.params.userId],
    songs: userSongs,
    currentUser: state.entities.users[state.session.id],
  };
};

const mDTP = dispatch => {
  return {
    updateUser: (user, id) => dispatch(updateUser(user, id)),
    fetchUser: userId => dispatch(fetchUser(userId)),
  };
};

export default connect(mSTP, mDTP)(ProfilePage);
