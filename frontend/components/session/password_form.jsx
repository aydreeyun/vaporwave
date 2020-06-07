import React from 'react';

class PasswordForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const errors = this.props.errors.map((error, i) => {
      return <p key={i} className="error-msg">{error}</p>
    });
    if (this.props.currentStep !== 1) {
      return (
        <div className="password-form">
          {this.props.prevButton}

          <br/>

          <label>
            <input type="password"
              onChange={this.props.update("password")}
              placeholder="Your password"/>
          </label>
          {errors}
          <button className="auth-form-button">Sign In</button>
          <a className="forgot-password">Don't know your password?</a>
        </div>
      );
    } else {
      return null;
    }
  }
};

export default PasswordForm;
