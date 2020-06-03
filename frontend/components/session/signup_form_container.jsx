import { connect } from 'react-redux';
import SignupForm from './signup_form';
import { signup, login } from '../../actions/session_actions';
import { receiveErrors, receiveError, clearErrors } from '../../actions/error_actions';
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
    receiveError: error => dispatch(receiveError(error)),
    clearErrors: () => dispatch(clearErrors()),
    login: user => dispatch(login(user)),
  };
};

export default connect(mSTP, mDTP)(SignupForm);