import { connect } from 'react-redux';
import LoginForm from './login_form';
import { login } from '../../actions/session_actions';
import { receiveErrors, receiveError, clearErrors } from '../../actions/error_actions';
import { closeModal } from '../../actions/modal_actions';

const mSTP = state => {
  return {
    errors: state.errors.session,
  };
};

const mDTP = dispatch => {
  return {
    login: user => dispatch(login(user)),
    closeModal: () => dispatch(closeModal()),
    receiveError: error => dispatch(receiveError(error)),
    clearErrors: () => dispatch(clearErrors()),
    receiveErrors: errors => dispatch(receiveErrors(errors)),
  };
};

export default connect(mSTP, mDTP)(LoginForm);