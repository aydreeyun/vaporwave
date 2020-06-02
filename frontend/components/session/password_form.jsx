import React from 'react';

class PasswordForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.currentStep !== 1) {
      return (
        <>
          {this.props.prevButton}

          <br/>

          <label>
            <input type="text" onChange={this.props.update("password")} placeholder="Your password"/>
          </label>
          <button>Sign In</button>
        </>
      );
    } else {
      return null;
    }
  }
};

export default PasswordForm;
