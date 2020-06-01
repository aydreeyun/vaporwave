import React from 'react';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({ [field]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.setState({ email: "", password: "" });
    this.props.processForm(user);
  }

  render() {
    const errors = this.props.errors.map(error => {
      return <li>{error}</li>
    })

    return (
      <>
        <h2>{this.props.formType}</h2>
          <ul>
            {errors}
          </ul>
          <form onSubmit={this.handleSubmit}>
            <label>
              <input type="text" onChange={this.update("email")} placeholder="Your email address or profile URL" />
            </label>
            <br/>
            <label>
              <input type="password" onChange={this.update("password")}/>
            </label>
  
            <button>{this.props.formType}</button>
          </form>
      </>
    );
  }
};

export default LoginForm;