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
    const { songs } = this.props;
    const songLinks = songs.map((song, i) => {
    return <li key={i}><Link to={`/songs/${song.id}`}>Song {song.id}</Link></li>
    })
    return (
      <>
        <NavbarContainer 
          url={this.props.history.location.pathname}
        />
        <div className="discover">
          <ul>
            {songLinks}
          </ul>
        </div>
      </>

    )
  }
}

export default Discover;