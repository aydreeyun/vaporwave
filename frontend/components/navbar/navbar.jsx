import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="navbar">
        <Link className="navbar-logo" to="/discover"></Link>
        <Link className="navbar-left-link" to="/discover">Home</Link>
        <a className="navbar-left-link" href="#">Stream</a>
        <a className="navbar-left-link" href="#">Library</a>
        <div className="navbar-search">
          <input className="navbar-search-input" type="text" placeholder="Search"/>
          <button className="navbar-search-button"><i className="fas fa-search"></i></button>
        </div>
        
        <a className="navbar-right-link upgrade" href="#">Upgrade</a>
        <Link className="navbar-right-link" to="/upload">Upload</Link>
        <Link className="navbar-user" to={`/${this.props.user.display_name}`}>
          {this.props.user.display_name}
          <i className="fas fa-angle-down"></i>
        </Link>
        <button className="navbar-icon-button"><i className="fas fa-bell"></i></button>
        <button className="navbar-icon-button"><i className="fas fa-envelope"></i></button>
        <button className="navbar-icon-button"><i className="fas fa-ellipsis-h"></i></button>
      </div>
    );
  }
};

export default Navbar;
