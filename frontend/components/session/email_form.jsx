import React from 'react';

class EmailForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const errors = this.props.errors.map(error => {
      return <p className="error-msg">{error}</p>
    });

    if (this.props.currentStep === 1) {
      return (
        <>
          <a className="auth-form-link" onClick={this.props.demoLogin}>Demo login</a>
          <div className="email-or">
            <div className="or-line"></div>
            <p>or</p>
            <div className="or-line"></div>
          </div>
          <label>
            <input className="auth-input"type="text" onChange={this.props.update("email")} placeholder="Your email address or profile URL" />
          </label>
          {errors}
          {this.props.nextButton}
          <br/>
          <div className="disclaimer">
            <a className="need-help">Need help?</a>
            <br/>
            <div className="disclaimer-text">
              <p>We may use your email and devices for updates and tips on VaporWave's products and services, and for activities notifications. You can unsubscribe for free at any time in your notification settings.</p>
              <p>We may use information you provide us in order to show you targeted ads as described in our <a>Privacy Policy</a>.</p>
            </div>
          </div>
        </>
      );
    } else {
      return null;
    }
    
  }
};

export default EmailForm;
