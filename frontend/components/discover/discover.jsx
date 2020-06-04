import React from 'react';

class Discover extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="discover">
        <p>Welcome {this.props.user.display_name}</p>
        <button onClick={this.props.logout}>Log Out</button>
      </div>
    )
  }
}

export default Discover;