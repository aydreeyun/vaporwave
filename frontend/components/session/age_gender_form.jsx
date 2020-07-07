import React from 'react';

class AgeGenderForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { currentStep, update, gender, nextButton, errors } = this.props;

    const genders = ["Male", "Female", "NA", "Null"];
    const customGender = !genders.includes(gender) ? 
      <input type="text" 
        placeholder="Custom gender" 
        onChange={update("gender")} /> : "";

    let ageError = null;
    if (errors.includes("Enter your age.")) {
      ageError = <p className="error-msg">Enter your age.</p>
    } 

    let genderError = null;
    if (errors.includes("Please indicate your gender.")) {
      genderError = <p className="error-msg">Please indicate your gender.</p>
    } 

    if (currentStep === 3) {
      return (
        <div className="age-gender-form">
          <h2>Create your VaporWave account</h2>
          <p>Tell us your age</p> 
          <input type="number" onChange={update("age")} autoFocus/>
          {ageError}
          <p>Gender</p>
          <select onChange={update("gender")}>
            <option value="Null">Indicate your gender</option>
            <option value="Female">Female</option>
            <option value="Male">Male</option>
            <option value="Custom">Custom</option>
            <option value="NA">Prefer Not to Say</option>
          </select>
          <br/>
          {customGender}
          {genderError}
          {nextButton}
        </div>
      );
    } else {
      return null;
    }
  }
};

export default AgeGenderForm;
