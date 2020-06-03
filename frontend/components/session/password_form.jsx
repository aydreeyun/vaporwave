import React from 'react';

class PasswordForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const errors = this.props.errors.map(error => {
      return <p className="error-msg">{error}</p>
    });

    if (this.props.currentStep !== 1) {
      return (
        <>
          {this.props.prevButton}

          <br/>

          <label>
            <input type="password" onChange={this.props.update("password")} placeholder="Your password"/>
          </label>
          {errors}
          <button>Sign In</button>
          <a href="#">Don't know your password?</a>
        </>
      );
    } else {
      return null;
    }
  }
};

export default PasswordForm;
