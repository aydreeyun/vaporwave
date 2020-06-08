import React from 'react';
import NavbarContainer from '../navbar/navbar_container';
import { Link } from 'react-router-dom';
import MusicPlayerContainer from '../music_player/music_player_container';

class Discover extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchUsers();
    this.props.fetchSongs();
    scrollTo(0, 0);
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
        <MusicPlayerContainer />
      </>

    )
  }
}

export default Discover;