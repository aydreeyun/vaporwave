import { connect } from 'react-redux';
import Splash from './splash';
import { logout } from '../../actions/session_actions';

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

export default connect(mSTP, mDTP)(Splash);
