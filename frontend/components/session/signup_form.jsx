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
      gender: "NA",
      displayName: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.nextStep = this.nextStep.bind(this);
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
    return e => this.setState({ [field]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.clearErrors();
    const user = this.state;
    this.setState({ email: "", password: "" });
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

  nextStepPassword() {
    let currentStep = this.state.currentStep;

    currentStep = currentStep >= 3 ? 4 : currentStep + 1;
    this.setState({ currentStep });
  }

  nextStepAgeGender() {
    let currentStep = this.state.currentStep;

    currentStep = currentStep >= 3 ? 4 : currentStep + 1;
    this.setState({ currentStep });
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

  demoLogin(e) {
    e.preventDefault();
    const user = { email: "demo@demo.com", password: "password" }
    this.props.login(user).then(() => this.props.closeModal());
  }

  render() {
    const errors = this.props.errors.map(error => {
      return <li>{error}</li>
    })
    
    const prevButton = this.state.currentStep !== 1 ? <button onClick={this.prevStep}>{this.state.email}</button> : "";
    const nextButton = this.state.currentStep < 4 ? <button onClick={this.nextStep}>Continue</button> : "";
    const acceptButton = this.state.currentStep !== 1 ? <button onClick={this.nextStep}>Accept & continue</button> : "";
    const getStartedButton = this.state.currentStep !== 1 ? <button onClick={this.nextStep}>Get started</button> : "";
    
    return (
      <>
        <button className="auth-form-button" onClick={this.demoLogin}>Demo login</button>
        <form className="auth-form" onSubmit={this.handleSubmit}>
          <EmailForm 
            currentStep={this.state.currentStep}
            update={this.update}
            nextButton={nextButton}
            errors={this.props.errors}
            receiveErrors={this.props.receiveErrors}
          />

          <SignupPasswordForm 
            currentStep={this.state.currentStep}
            update={this.update}
            prevButton={prevButton}
            acceptButton={acceptButton}
          />

          <AgeGenderForm 
            currentStep={this.state.currentStep}
            update={this.update}
            gender={this.state.gender}
            nextButton={nextButton}
          />

          <DisplayNameForm 
            currentStep={this.state.currentStep}
            update={this.update}
            getStartedButton={getStartedButton}
          />
        </form>
      </>
    );
  }
};

export default SignupForm;