import React from 'react';

class EmailForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const errors = this.props.errors.map(error => {
      return <li>{error}</li>
    })

    if (this.props.currentStep === 1) {
      return (
        <>
          <label>
            <input type="text" onChange={this.props.update("email")} placeholder="Your email address or profile URL" />
          </label>
          <ul>
          {errors}
          </ul>
          <br/>
          {this.props.nextButton}
          <br/>
          <div>
            <a href="#">Need help?</a>
            <p>We may use your email and devices for updates and tips on VaporWave's products and services, and for activities notifications. You can unsubscribe for free at any time in your notification settings.</p>
            <p>We may use information you provide us in order to show you targeted ads as described in our <a href="#">Privacy Policy</a>.</p>
          </div>
        </>
      );
    } else {
      return null;
    }
    
  }
};

export default EmailForm;
