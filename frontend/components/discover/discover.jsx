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
      return (
        <li key={i}>
          <Link to={`/songs/${song.id}`}>
            Song {song.id}
          </Link>
        </li>
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