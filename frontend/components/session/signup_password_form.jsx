import React from 'react';

class SignupPasswordForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const errors = this.props.errors.map((error, i) => {
      return <li className="error-msg" key={i} >{error}</li>
    });

    if (this.props.currentStep === 2) {
      return (
        <>
          {this.props.prevButton}
          <br/>
          <label>Choose a password
            <br/>
            <input type="password" onChange={this.props.update("password")}/>
          </label>
          <ul>
            {errors}
          </ul>
          {this.props.acceptButton}
        </>
      );
    } else {
      return null;
    }

  }
};

export default SignupPasswordForm;
