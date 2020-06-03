import React from 'react';
import EmailForm from './email_form';
import SignupPasswordForm from './signup_password_form';
import AgeGenderForm from './age_gender_form';
import DisplayNameForm from './display_name_form';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStep: 1,
      email: "",
      password: "",
      age: "",
      gender: "Null",
      displayName: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.nextStepEmail = this.nextStepEmail.bind(this);
    this.nextStepPassword = this.nextStepPassword.bind(this);
    this.nextStepAgeGender = this.nextStepAgeGender.bind(this);
    this.prevStep = this.prevStep.bind(this);
    this.demoLogin = this.demoLogin.bind(this);

    this.emailError = "Enter a valid email address or profile url."
    this.passwordError = "Use at least 6 characters."
    this.ageError = "Enter your age."
    this.genderError = "Please indicate your gender."
    this.displayNameError = "Enter your display name. You can change it later."
  }

  componentDidMount() {
    this.props.receiveErrors([]);
  }

  update(field) {
    return e => {
      this.props.clearErrors();
      this.setState({ [field]: e.target.value })
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.clearErrors();
    const user = this.state;
    this.props.signup(user).then(() => this.props.closeModal());
  }

  nextStepEmail(e) {
    e.preventDefault();
    this.props.clearErrors();
    let currentStep = this.state.currentStep;

    if (this.validEmail(this.state.email)) {
      currentStep = currentStep >= 3 ? 4 : currentStep + 1;
      this.setState({ currentStep });
    } else {
      this.props.receiveError(this.emailError);
    }
  }

  nextStepPassword(e) {
    e.preventDefault();
    this.props.clearErrors();
    let currentStep = this.state.currentStep;

    if (this.validPassword(this.state.password)) {
      currentStep = currentStep >= 3 ? 4 : currentStep + 1;
      this.setState({ currentStep });
    } else {
      this.props.receiveError(this.passwordError);
    }
  }

  nextStepAgeGender(e) {
    e.preventDefault();
    this.props.clearErrors();
    let currentStep = this.state.currentStep;
    debugger
    if (!this.validAge(this.state.age)) {
      this.props.receiveError(this.ageError);
    }

    if (!this.validGender(this.state.gender)) {
      this.props.receiveError(this.genderError);
    }

    if (this.validAge(this.state.age) && this.validGender(this.state.gender)) {
      currentStep = currentStep >= 3 ? 4 : currentStep + 1;
      this.setState({ currentStep });
    } 
  }

  prevStep() {
    let currentStep = this.state.currentStep;

    currentStep = currentStep <= 1 ? 1 : currentStep - 1;
    this.setState({ currentStep });
  }

  validEmail(email) {
    const indexAt = email.split("").indexOf("@");
    const indexDot = email.split("").indexOf(".");

    if (indexAt === -1 || indexDot === -1) {
      return false;
    }

    if (indexAt < indexDot) {
      return true;
    } else {
      return false;
    }
  }

  validPassword(password) {
    if (password.length < 6) {
      return false;
    } else {
      return true;
    }
  }

  validAge(age) {
    if (!age || age < 0) {
      return false;
    } else {
      return true;
    }
  }

  validGender(gender) {
    debugger
    if (gender === "Null") {
      return false;
    } else {
      return true;
    }
  }

  validDisplayName(name) {
    if (name.length === 0) {
      return false;
    } else {
      return true;
    }
  }

  demoLogin(e) {
    e.preventDefault();
    const user = { email: "demo@demo.com", password: "password" }
    this.props.login(user).then(() => this.props.closeModal());
  }

  render() {
    const prevButton = this.state.currentStep !== 1 ? <a className="auth-prev-button" onClick={this.prevStep}><i class="fas fa-caret-left"></i> {this.state.email}</a> : "";
    const nextButton = this.state.currentStep < 4 ? <button className="auth-form-button" onClick={this.nextStepEmail}>Continue</button> : "";
    const acceptButton = this.state.currentStep !== 1 ? <button className="auth-form-button" onClick={this.nextStepPassword}>Accept & continue</button> : "";
    const nextButtonAG = this.state.currentStep < 4 ? <button className="auth-form-button" onClick={this.nextStepAgeGender}>Continue</button> : "";
    const getStartedButton = this.state.currentStep !== 1 ? <button className="auth-form-button" onClick={this.handleSubmit}>Get started</button> : "";
    
    return (
      <>
        <form className="auth-form" onSubmit={this.handleSubmit}>
          <EmailForm 
            currentStep={this.state.currentStep}
            update={this.update}
            nextButton={nextButton}
            errors={this.props.errors}
          />
          <SignupPasswordForm 
            currentStep={this.state.currentStep}
            update={this.update}
            prevButton={prevButton}
            acceptButton={acceptButton}
            errors={this.props.errors}
          />
          <AgeGenderForm 
            currentStep={this.state.currentStep}
            update={this.update}
            gender={this.state.gender}
            nextButton={nextButtonAG}
            errors={this.props.errors}
          />
          <DisplayNameForm 
            currentStep={this.state.currentStep}
            update={this.update}
            getStartedButton={getStartedButton}
            errors={this.props.errors}
          />
        </form>
      </>
    );
  }
};

export default SignupForm;