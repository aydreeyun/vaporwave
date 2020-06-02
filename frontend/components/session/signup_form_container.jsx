import { connect } from 'react-redux';
import SignupForm from './signup_form';
import { signup } from '../../actions/session_actions';
import { closeModal } from '../../actions/modal_actions';

const mSTP = state => {
  return {
    errors: state.errors.session,
  };
};

const mDTP = dispatch => {
  return {
    processForm: user => dispatch(signup(user)),
    closeModal: () => dispatch(closeModal()),
  };
};

export default connect(mSTP, mDTP)(SignupForm);