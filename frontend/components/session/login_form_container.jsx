import { connect } from 'react-redux';
import LoginForm from './login_form';
import { login, receiveErrors } from '../../actions/session_actions';
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
    receiveErrors: errors => dispatch(receiveErrors(errors)),
  };
};

export default connect(mSTP, mDTP)(LoginForm);