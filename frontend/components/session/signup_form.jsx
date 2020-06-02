import React from 'react';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      age: "",
      gender: "NA",
      displayName: "",
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
    const genders = ["Male", "Female", "NA"];
    const customGender = !genders.includes(this.state.gender) ? 
      <input type="text" placeholder="Custom gender" onChange={this.update("gender")} /> : "";
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

          <label>Choose a password
            <br/>
            <input type="password" onChange={this.update("password")}/>
          </label>

          <br/>

          <label>Tell us your age
            <br/>
            <input type="number" onChange={this.update("age")}/>
          </label>

          <br/>

          <label>
            <select onChange={this.update("gender")}>
              <option value="NA">Indicate your gender</option>
              <option value="Female">Female</option>
              <option value="Male">Male</option>
              <option value="Custom">Custom</option>
              <option value="NA">Prefer Not to Say</option>
            </select>
            <br/>

            {customGender}
          </label>

          <br/>

          <label>Choose your display name
            <br/>
            <input type="input" onChange={this.update("display_name")}/>
          </label>
        
          <br/>

          <button>Create Account</button>
        </form>
      </>
    );
  }
};

export default SignupForm;