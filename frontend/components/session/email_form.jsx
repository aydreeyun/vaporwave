import React from 'react';
import { Link } from 'react-router-dom';

class EmailForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: ""
    };

    this.update = this.update.bind(this);
  }

  update(e) {
    this.setState({ [field]: e.target.value });
  }

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label>
            <input type="text" onChange={this.update} placeholder="Your email address or profile URL" />
          </label>
          <a href="#">Continue</a>
        </form>
        <div>
          <a href="#">Need help?</a>
          <p>We may use your email and devices for updates and tips on SoundCloud's products and services, and for activities notifications. You can unsubscribe for free at any time in your notification settings.</p>
          <p>We may use information you provide us in order to show you targeted ads as described in our <a href="#">Privacy Policy</a>.</p>
        </div>
      </>
    );
  }
};

export default EmailForm;
