import React from 'react';

class PasswordForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const errors = this.props.errors.map((error, i) => {
      return <li key={i} >{error}</li>
    });

    if (this.props.currentStep !== 1) {
      return (
        <>
          {this.props.prevButton}

          <br/>

          <label>
            <input type="password" onChange={this.props.update("password")} placeholder="Your password"/>
          </label>
          <ul>
          {errors}
          </ul>
          <button>Sign In</button>
        </>
      );
    } else {
      return null;
    }
  }
};

export default PasswordForm;
