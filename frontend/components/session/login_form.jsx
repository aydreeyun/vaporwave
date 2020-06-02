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
    this.prevStep = this.prevStep.bind(this)
  }

  componentWillUnmount() {
    this.setState({ email: "" });
  }

  update(field) {
    return e => this.setState({ [field]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.setState({ email: "", password: "" });
    this.props.login(user);
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


  render() {
    const errors = this.props.errors.map(error => {
      return <li>{error}</li>
    })

    const prevButton = this.state.currentStep !== 1 ? <button onClick={this.prevStep}>{this.state.email}</button> : "";
    const nextButton = this.state.currentStep < 2 ? <button onClick={this.nextStep}>Continue</button> : "";

    return (
      <>
        <h2>{this.props.formType}</h2>
        <ul>
          {errors}
        </ul>
        <form onSubmit={this.handleSubmit}>
          <EmailForm 
            currentStep={this.state.currentStep}
            update={this.update}
            nextButton={nextButton}
          />
          <PasswordForm 
            currentStep={this.state.currentStep}
            update={this.update}
            email={this.state.email}
            prevButton={prevButton}
          />
        </form>
      </>
    );
  }
};

export default LoginForm;