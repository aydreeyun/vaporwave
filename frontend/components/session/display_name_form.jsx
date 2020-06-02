import React from 'react';

class DisplayNameForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.currentStep === 4) {
      return (
        <>
          <label>Choose your display name
            <br/>
            <input type="input" onChange={this.props.update("display_name")}/>
          </label>
          {this.props.getStartedButton}
        </>
      );
    } else {
      return null;
    }
  }
};

export default DisplayNameForm;
