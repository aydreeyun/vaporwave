import React from 'react';

class DisplayNameForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const errors = this.props.errors.map((error, i) => {
      return <li className="error-msg" key={i} >{error}</li>
    });

    if (this.props.currentStep === 4) {
      return (
        <>
          <label>Choose your display name
            <br/>
            <input type="input" onChange={this.props.update("display_name")}/>
          </label>
          <ul>
          {errors}
          </ul>
          {this.props.getStartedButton}
        </>
      );
    } else {
      return null;
    }
  }
};

export default DisplayNameForm;
