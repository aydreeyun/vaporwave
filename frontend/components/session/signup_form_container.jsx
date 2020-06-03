import { connect } from 'react-redux';
import SignupForm from './signup_form';
import { signup, login, receiveErrors } from '../../actions/session_actions';
import { closeModal } from '../../actions/modal_actions';

const mSTP = state => {
  return {
    errors: state.errors.session,
  };
};

const mDTP = dispatch => {
  return {
    signup: user => dispatch(signup(user)),
    closeModal: () => dispatch(closeModal()),
    receiveErrors: errors => dispatch(receiveErrors(errors)),
    login: user => dispatch(login(user)),
  };
};

export default connect(mSTP, mDTP)(SignupForm);