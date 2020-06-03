import React from 'react';

class DisplayNameForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const errors = this.props.errors.map((error, i) => {
      return <p key={i} className="error-msg">{error}</p>
    });

    if (this.props.currentStep === 4) {
      return (
        <div className="display-name-form">
          <h2>Tell us a bit about yourself</h2>
          <h3>Choose your display name</h3>
          <input type="input" onChange={this.props.update("display_name")}/>
          {errors}
          <p className="disclaimer-text">Your display name can be anything you like. Your name or artist name are good choices.</p>
          {this.props.getStartedButton}
        </div>
      );
    } else {
      return null;
    }
  }
};

export default DisplayNameForm;
