import React from 'react';
import NavbarContainer from '../navbar/navbar_container';
import { Link } from 'react-router-dom';

class Discover extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchUsers();
    this.props.fetchSongs();
  }

  render() {
    return (
      <>
        <NavbarContainer />
        <div className="discover">
          <p>Welcome {this.props.user.display_name}</p>
          <button onClick={this.props.logout}>Log Out</button>
        </div>
      </>

    )
  }
}

export default Discover;