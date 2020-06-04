import { connect } from 'react-redux';
import Discover from './discover';
import { logout } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions';

const mSTP = state => {
  return {
    user: state.entities.users[state.session.id],
  };
};

const mDTP = dispatch => {
  return {
    logout: () => dispatch(logout()),
  };
};

export default connect(mSTP, mDTP)(Discover);