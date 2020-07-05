import { connect } from 'react-redux';
import ProfilePage from './profile_page';
import { updateUser, fetchUser } from '../../actions/user_actions';
import { fetchUserComments, deleteComment } from '../../actions/comment_actions';

const mSTP = (state, ownProps) => {
  const userSongs = Object.values(state.entities.songs)
    .filter(song => song.artist_id === parseInt(ownProps.match.params.userId));

  return {
    user: state.entities.users[ownProps.match.params.userId],
    songs: state.entities.songs,
    userSongs: userSongs,
    currentUser: state.entities.users[state.session.id],
    comments: state.entities.comments,
  };
};

const mDTP = dispatch => {
  return {
    updateUser: (user, id) => dispatch(updateUser(user, id)),
    fetchUser: userId => dispatch(fetchUser(userId)),
    fetchUserComments: userId => dispatch(fetchUserComments(userId)),
    deleteComment: commentId => dispatch(deleteComment(commentId)),
  };
};

export default connect(mSTP, mDTP)(ProfilePage);
