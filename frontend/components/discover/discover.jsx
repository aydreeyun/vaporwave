import React from 'react';
import NavbarContainer from '../navbar/navbar_container';
import { Link } from 'react-router-dom';
import MusicPlayerContainer from '../music_player/music_player_container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
    const { songs, users } = this.props;
    const songLinks = songs.map((song, i) => {
      return (
        <Link key={i} to={`/songs/${song.id}`}>
          <li className="weekly-songs">
            <div className="weekly-songs-left">
              <div className="weekly-artist">
                {users[song.artist_id].display_name} – 
              </div>
              {song.title}
            </div>
            <div className="weekly-songs-right">
              <FontAwesomeIcon icon="play" />
              <p>300</p>
            </div>
          </li>
        </Link>
      )
    });

    return (
      <>
        <NavbarContainer 
          url={this.props.history.location.pathname}
        />
        <div className="discover">
          <div className="discover-main">
            <div className="discover-content">
              <h1>VaporWave Weekly</h1>
              <p>All of VaporWave. Just for you.</p>
              <div className="discover-weekly">
                <div className="weekly-photo">

                </div>
                <div className="weekly-song-list">
                  <ul>
                    {songLinks}
                  </ul>
                </div>
              </div>
            </div>

            <div className="discover-content">
              <h1>New Music Now</h1>
              <p>The latest hits, updated all the time</p>
              <div className="discover-new">

              </div>
            </div>

            <div className="discover-content">
              <h1>Stay Home</h1>
              <p>Tunes for isolation and self-care</p>
              <div className="discover-new">

              </div>
            </div>
          </div>

          <div className="discover-sidebar">
            <div className="discover-sidebar-main">

            </div>
          </div>
        </div>

        <MusicPlayerContainer />
      </>

    )
  }
}

export default Discover;