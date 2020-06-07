import React from 'react';
import LoginFormContainer from '../session/login_form_container';
import SignupFormContainer from '../session/signup_form_container';

class Modal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (!this.props.modal) {
      return null;
    }

    let component;
    switch (this.props.modal) {
      case 'login':
        component = <LoginFormContainer />;
        break;
      case 'signup':
        component = <SignupFormContainer />;
        break;
      default:
        return null;
    }
    return (
      <div className="modal-background" onMouseDown={this.props.closeModal}>
        <button className="modal-close-button" onClick={this.props.closeModal}>x</button>
        <div className="modal-child" onMouseDown={e => e.stopPropagation()}>
          {component}
        </div>
      </div>
    );
  }
};

export default Modal;
