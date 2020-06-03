import React from 'react';

class AgeGenderForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const genders = ["Male", "Female", "NA", "Null"];
    const customGender = !genders.includes(this.props.gender) ? 
      <input type="text" placeholder="Custom gender" onChange={this.props.update("gender")} /> : "";
    const errors = this.props.errors.map((error, i) => {
      return <li className="error-msg" key={i} >{error}</li>
    });


    if (this.props.currentStep === 3) {
      return (
        <>
          <label>Tell us your age
            <br/>
            <input type="number" onChange={this.props.update("age")}/>
          </label>
          <ul>
          {errors.shift()}
          </ul>

          <br/>

          <label>
            <select onChange={this.props.update("gender")}>
              <option value="Null">Indicate your gender</option>
              <option value="Female">Female</option>
              <option value="Male">Male</option>
              <option value="Custom">Custom</option>
              <option value="NA">Prefer Not to Say</option>
            </select>
            <br/>

            {customGender}
          </label>
          <ul>
          {errors.shift()}
          </ul>
          {this.props.nextButton}
        </>
      );
    } else {
      return null;
    }
  }
};

export default AgeGenderForm;
