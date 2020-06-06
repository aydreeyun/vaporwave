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
        <NavbarContainer 
          url={this.props.history.location.pathname}
        />
        <div className="discover">
          
        </div>
      </>

    )
  }
}

export default Discover;