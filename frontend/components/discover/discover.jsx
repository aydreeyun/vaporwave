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
    const { songs, users, receiveCurrentSong } = this.props;
    const weeklySongs = songs.map((song, i) => {
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
      );
    });

    const newSongs = songs.reverse().map((song, i) => {
      const songPhoto = song.photoUrl ? <img src={song.photoUrl} /> : null;

      return (
        <div className="song-items" key={i}>
          <li>
            <Link to={`/songs/${song.id}`}>
              <div className="new-song-photos">
                {songPhoto}
              </div>
              <div className="song-item-title">
                {song.title}
              </div>
            </Link>
            <Link className="song-item-artist"
              to={`/${users[song.artist_id].display_name}`}>
              {users[song.artist_id].display_name}
            </Link>
          </li>
        </div>
      );
    });

    const stayHomeSongs = songs.reverse().map((song, i) => {
      const songPhoto = song.photoUrl ? <img src={song.photoUrl} /> : null;

      return (
        <div className="song-items" key={i}>
          <li>
            <Link to={`/songs/${song.id}`}>
              <div className="new-song-photos">
                {songPhoto}
              </div>
              <div className="song-item-title">
                {song.title}
              </div>
            </Link>
            <Link className="song-item-artist"
              to={`/${users[song.artist_id].display_name}`}>
              {users[song.artist_id].display_name}
            </Link>
          </li>
        </div>
      );
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
                    {weeklySongs}
                  </ul>
                </div>
              </div>
            </div>

            <div className="discover-content">
              <h1>New Music Now</h1>
              <p>The latest hits, updated all the time</p>
              <div className="discover-new">
                <ul>
                  {newSongs}
                </ul>
              </div>
            </div>

            <div className="discover-content">
              <h1>Stay Home</h1>
              <p>Tunes for isolation and self-care</p>
              <div className="discover-new">
                <ul>
                  {stayHomeSongs}
                </ul>
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