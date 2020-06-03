import React from 'react';

class DisplayNameForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const errors = this.props.errors.map(error => {
      return <p className="error-msg">{error}</p>
    });

    if (this.props.currentStep === 4) {
      return (
        <>
          <label>Choose your display name
            <br/>
            <input type="input" onChange={this.props.update("display_name")}/>
          </label>
          {errors}
          {this.props.getStartedButton}
        </>
      );
    } else {
      return null;
    }
  }
};

export default DisplayNameForm;
