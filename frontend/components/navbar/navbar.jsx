import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
      <Link to={`/${user.display_name}`}
        onMouseDown={e => e.preventDefault()}>
        <FontAwesomeIcon className="navbar-user-icon"
          icon="user" />
        Profile
      </Link>
      <div className="navbar-credentials">
        <a href="https://github.com/aydreeyun/vaporwave"
          onMouseDown={e => e.preventDefault()}>
          <FontAwesomeIcon className="navbar-github-icon"
            icon={['fab', 'github']} />
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/adriantaehyunkim/"
          onMouseDown={e => e.preventDefault()}>
          <FontAwesomeIcon className="navbar-linkedin-icon"
            icon={['fab', 'linkedin']} />
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
          <input className="navbar-search-input"
            type="text"
            placeholder="Search"/>
          <button className="navbar-search-button">
            <FontAwesomeIcon icon="search" />
          </button>
        </div>
        <a className="navbar-right-link upgrade">Try Pro</a>
        <Link className="navbar-right-link" to="/upload">Upload</Link>
        <a className="navbar-user"
          tabIndex="0"
          onClick={this.handleUserDropdown}
          onBlur={this.handleUserBlur}
        >
          {user.display_name}
          <FontAwesomeIcon icon="angle-down" />
        </a>
        {userDrop}
        <button className="navbar-icon-button">
          <FontAwesomeIcon className="navbar-bell-icon"
              icon="bell" />
        </button>
        <button className="navbar-icon-button">
          <FontAwesomeIcon className="navbar-envelope-icon"
            icon="envelope" />
        </button>
        <button className="navbar-icon-button" 
          onClick={this.handleOptionDropdown}
          onBlur={this.handleOptionBlur}
        >
          <FontAwesomeIcon className="navbar-ellipsis-icon"
            icon="ellipsis-h" />
        </button>
        {optionDrop}
      </div>
    );
  }
};

export default Navbar;
