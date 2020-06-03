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
  }

  componentDidMount() {
    this.props.receiveErrors([]);
  }

  update(field) {
    return e => this.setState({ [field]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.setState({ email: "", password: "" });
    this.props.login(user).then(() => this.props.closeModal());
  }

  nextStep() {
    let currentStep = this.state.currentStep;

    currentStep = currentStep >= 1 ? 2 : currentStep + 1;
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
      return true
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
    const prevButton = this.state.currentStep !== 1 ? <button onClick={this.prevStep}>{this.state.email}</button> : "";
    const nextButton = this.state.currentStep < 2 ? <button onClick={this.nextStep}>Continue</button> : "";

    return (
      <>
        <button onClick={this.demoLogin}>Demo login</button>
        <form onSubmit={this.handleSubmit}>
          <EmailForm 
            currentStep={this.state.currentStep}
            update={this.update}
            nextButton={nextButton}
            errors={this.props.errors}
            receiveErrors={this.props.receiveErrors}
          />
          <PasswordForm 
            currentStep={this.state.currentStep}
            update={this.update}
            prevButton={prevButton}
          />
        </form>
      </>
    );
  }
};

export default LoginForm;