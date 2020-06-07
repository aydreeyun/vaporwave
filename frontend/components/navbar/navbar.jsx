import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userDropdown: false,
      optionDropdown: false,
    };

    this.handleUserDropdown = this.handleUserDropdown.bind(this);
    this.handleOptionDropdown = this.handleOptionDropdown.bind(this);
    this.handleUserBlur = this.handleUserBlur.bind(this);
    this.handleOptionBlur = this.handleOptionBlur.bind(this);
  }

  handleUserDropdown() {
    if (this.state.userDropdown) {
      this.setState({ userDropdown: false });
    } else {
      this.setState({ userDropdown: true });
    }
  }

  handleOptionDropdown() {
    if (this.state.optionDropdown) {
      this.setState({ optionDropdown: false });
    } else {
      this.setState({ optionDropdown: true });
    }
  }

  handleUserBlur() {
    if (this.state.userDropdown) {
      this.setState({ userDropdown: false });
    }
  }

  handleOptionBlur() {
    if (this.state.optionDropdown) {
      this.setState({ optionDropdown: false });
    }
  }

  render() {
    const { user, logout } = this.props;

    const userDrop = this.state.userDropdown ? 
    <div className="user-dropdown">
      <Link to={`${user.display_name}`}
        onMouseDown={e => e.preventDefault()}>
       <i className="fas fa-user"></i>
        Profile
      </Link>
      <div className="navbar-credentials">
        <a href="https://github.com/aydreeyun/vaporwave"
          onMouseDown={e => e.preventDefault()}>
          <i className="fab fa-github"></i>
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/adriantaehyunkim/"
          onMouseDown={e => e.preventDefault()}>
          <i className="fab fa-linkedin"></i>
          Linkedin
        </a>
      </div>
    </div>
    : null
    const optionDrop = this.state.optionDropdown ? 
    <div className="option-dropdown">
      <button onMouseDown={e => e.preventDefault()}
        onClick={logout}>
        Sign out
      </button>
    </div>
    : null;

    const focused = this.props.url === "/discover" ? "focused" : ""


    return (
      <div className="navbar" ref={this.ref}>
        <Link className="navbar-logo" to="/discover"></Link>
        <Link className={`navbar-left-link ${focused}`} to="/discover">Home</Link>
        <a href="https://github.com/aydreeyun/vaporwave" className="navbar-left-link">GitHub</a>
        <a href="https://www.linkedin.com/in/adriantaehyunkim/" className="navbar-left-link">Linkedin</a>
        <div className="navbar-search">
          <input className="navbar-search-input" type="text" placeholder="Search"/>
          <button className="navbar-search-button"><i className="fas fa-search"></i></button>
        </div>
        <a className="navbar-right-link upgrade">Try Pro</a>
        <Link className="navbar-right-link" to="/upload">Upload</Link>
        <a className="navbar-user"
          tabIndex="0"
          onClick={this.handleUserDropdown}
          onBlur={this.handleUserBlur}
        >
          {user.display_name}
          <i className="fas fa-angle-down"></i>
        </a>
        {userDrop}
        <button className="navbar-icon-button"><i className="fas fa-bell"></i></button>
        <button className="navbar-icon-button">
          <i className="fas fa-envelope"></i>
        </button>
        <button className="navbar-icon-button" 
          onClick={this.handleOptionDropdown}
          onBlur={this.handleOptionBlur}
        >
          <i className="fas fa-ellipsis-h"></i>
        </button>
        {optionDrop}
      </div>
    );
  }
};

export default Navbar;
