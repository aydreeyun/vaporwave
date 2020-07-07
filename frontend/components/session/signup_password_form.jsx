import React from 'react';

class SignupPasswordForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const errors = this.props.errors.map((error, i) => {
      return <p key={i} className="error-msg">{error}</p>
    });

    if (this.props.currentStep === 2) {
      return (
        <div className="signup-password-form">
          <h2>Create your VaporWave account</h2>
          {this.props.prevButton}
          <p>Choose a password</p> 
          <input type="password" onChange={this.props.update("password")} autoFocus/>
          {errors}
          <div className="disclaimer-text">
            <p>By signing up I accept the Terms of Use. I have read and understood the Privacy Policy and Cookies Policy.</p>
          </div>
          {this.props.acceptButton}
        </div>
      );
    } else {
      return null;
    }

  }
};

export default SignupPasswordForm;
