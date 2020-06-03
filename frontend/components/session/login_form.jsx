import React from 'react';
import EmailForm from './email_form';
import PasswordForm from './password_form';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStep: 1,
      email: "",
      password: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.nextStep = this.nextStep.bind(this);
    this.prevStep = this.prevStep.bind(this);
    this.demoLogin = this.demoLogin.bind(this);

    this.emailError = "Enter a valid email address or profile url."
    this.passwordError = "Enter a valid password."
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

    if (this.validPassword(this.state.password)) {
      this.props.login(user).then(() => this.props.closeModal());
    } else {
      this.props.receiveError(this.passwordError);
    }
  }

  nextStep(e) {
    e.preventDefault();
    this.props.clearErrors();
    let currentStep = this.state.currentStep;

    if (this.validEmail(this.state.email)) {
      currentStep = currentStep >= 1 ? 2 : currentStep + 1;
      this.setState({ currentStep });
    } else {
      this.props.receiveError(this.emailError);
    }
  }

  prevStep() {
    let currentStep = this.state.currentStep;

    currentStep = currentStep <= 1 ? 1 : currentStep - 1;
    this.setState({ currentStep, email: "" });
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
    if (password.length === 0) {
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
    const nextButton = this.state.currentStep < 2 ? <button className="auth-form-button" onClick={this.nextStep}>Continue</button> : "";

    return (
      <>
        <form className="auth-form" onSubmit={this.handleSubmit}>
          <EmailForm 
            currentStep={this.state.currentStep}
            update={this.update}
            nextButton={nextButton}
            demoLogin={this.demoLogin}
            errors={this.props.errors}
          />
          <PasswordForm 
            currentStep={this.state.currentStep}
            update={this.update}
            errors={this.props.errors}
            prevButton={prevButton}
          />
        </form>
      </>
    );
  }
};

export default LoginForm;