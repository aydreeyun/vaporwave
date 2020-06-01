import { connect } from 'react-redux';
import LoginForm from './login_form';
import { login } from '../../actions/session_actions';

const mSTP = state => {
  return {
    errors: state.errors.session,
    formType: "Log In"
  };
};

const mDTP = dispatch => {
  return {
    processForm: user => dispatch(login(user)),
  };
};

export default connect(mSTP, mDTP)(LoginForm);