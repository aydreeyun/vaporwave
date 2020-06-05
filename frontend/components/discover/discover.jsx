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
      <div className="discover">
        <NavbarContainer />
        <p>Welcome {this.props.user.display_name}</p>
        <button onClick={this.props.logout}>Log Out</button>
        <br/>
        <Link to="songs/2">2</Link>
        <br/>
        <Link to="songs/3">3</Link>
        <br/>
        <Link to="songs/4">4</Link>
        <br/>
        <Link to="songs/5">5</Link>
      </div>
    )
  }
}

export default Discover;