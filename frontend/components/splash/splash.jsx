import React from 'react';
import { Link, Redirect } from 'react-router-dom';

class Splash extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.user) {
      return (
        <>
          <p>Welcome {this.props.user.display_name}</p>
          <button onClick={this.props.logout}>Log Out</button>
        </>
      );
    } else {
      return (
        <>
          <button onClick={() => this.props.openModal("login")}>Sign In</button>
          <br/>
          <button onClick={() => this.props.openModal("signup")}>Create account</button>
        </>
      );
    }

    
  }
};

export default Splash;
