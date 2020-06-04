import React from 'react';
import NavbarContainer from '../navbar/navbar_container';

class Discover extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="discover">
        <NavbarContainer />
        <p>Welcome {this.props.user.display_name}</p>
        <button onClick={this.props.logout}>Log Out</button>
      </div>
    )
  }
}

export default Discover;