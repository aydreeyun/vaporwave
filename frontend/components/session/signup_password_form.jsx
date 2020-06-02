import React from 'react';

class SignupPasswordForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.currentStep === 2) {
      return (
        <>
          {this.props.prevButton}
          <br/>
          <label>Choose a password
            <br/>
            <input type="password" onChange={this.props.update("password")}/>
          </label>
          {this.props.acceptButton}
        </>
      );
    } else {
      return null;
    }

  }
};

export default SignupPasswordForm;
