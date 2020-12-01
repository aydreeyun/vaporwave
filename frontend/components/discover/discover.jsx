import React from 'react';
import NavbarContainer from '../navbar/navbar_container';
import PlayButtonContainer from '../music_player/play_button_container';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Discover extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      newMusicHover: null,
      stayHomeHover: null,
      likedSongsHover: null,
      randomUsers: this.randomArr(Object.values(props.users).filter(user => user.id !== props.currentUser.id)),
      randomSongs: this.randomArr(Object.values(props.songs)),
      // followed: "Follow",
    }

    // this.handleFollow = this.handleFollow.bind(this);
  }

  componentDidMount() {
    scrollTo(0, 0);
  }

  // BUG - all follow buttons are clicked when clicking one
  // handleFollow() {
  //   if (this.state.followed === "Follow") {
  //     this.setState({ followed: "Following" });
  //   } else {
  //     this.setState({ followed: "Follow" });
  //   }
  // }

  randomArr(arr) {
    for (var i = arr.length - 1; i > 0; i--) {
      let randomNum = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[randomNum]] = [arr[randomNum], arr[i]]
    }

    return arr;
  }

  render() {
    const { songs, users } = this.props;
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
              <p>646</p>
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
              <div className="new-song-photos"
                onMouseEnter={() => this.setState({ newMusicHover: song.id })}
                onMouseLeave={() => this.setState({ newMusicHover: null })}>
                {songPhoto}
              </div>
              <div className="song-item-title">
                {song.title}
              </div>
            </Link>
            {this.state.newMusicHover === song.id ? 
              <div className="discover-play-button"
                onMouseEnter={() => this.setState({ newMusicHover: song.id })}
                onMouseLeave={() => this.setState({ newMusicHover: null })}>
                <PlayButtonContainer songId={song.id} />
              </div>
            : null
            }
            <Link className="song-item-artist"
              to={`/users/${users[song.artist_id].id}`}>
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
              <div className="new-song-photos"
                onMouseEnter={() => this.setState({ stayHomeHover: song.id })}
                onMouseLeave={() => this.setState({ stayHomeHover: null })}>
                {songPhoto}
              </div>
              <div className="song-item-title">
                {song.title}
              </div>
            </Link>
            {this.state.stayHomeHover === song.id ? 
              <div className="discover-play-button"
                onMouseEnter={() => this.setState({ stayHomeHover: song.id })}
                onMouseLeave={() => this.setState({ stayHomeHover: null })}>
                <PlayButtonContainer songId={song.id} />
              </div>
            : null
            }
            <Link className="song-item-artist"
              to={`/users/${users[song.artist_id].id}`}>
              {users[song.artist_id].display_name}
            </Link>
          </li>
        </div>
      );
    });

    // FOR FOLLOW FEATURE
    // const followed = this.state.followed === "Following" ?
    //   "followed" : "";
    // const followedIcon = this.state.followed === "Following" ?
    //   <FontAwesomeIcon icon="user-check" />
    // : <FontAwesomeIcon icon="user-plus" />;
    const followButton = 
      <button className="artist-follow"
      // {`artist-follow ${followed}`}
        // onClick={this.handleFollow}
      >
        {/* {followedIcon} */}
        <FontAwesomeIcon icon="user-plus" />
        {/* {this.state.followed} */}
        Follow
      </button>;
    // FOR FOLLOW FEATURE

    const followUsers = this.state.randomUsers.slice(0, 3).map((user, i) => {
      return (
        <div key={i} className="follow-user">
            <Link to={`/users/${user.id}`}>
              <div className="follow-user-photo">
                {user.photoUrl ? <img src={user.photoUrl} /> : null}
              </div>
            </Link>
          <div className="follow-user-info">
            <Link to={`/users/${user.id}`}>
              {user.display_name}
            </Link>
            <div className="follow-user-stats">
              <div className="user-stats">
                <a>
                  <FontAwesomeIcon icon="user-friends" />
                  101
                </a>
                <a>
                  <FontAwesomeIcon icon="music" />
                  11
                </a>
              </div>
              <div className="follow-user-button">
                {followButton}
              </div>
            </div>
          </div>
        </div>
      );
    });

    const likedSongs = this.state.randomSongs.slice(0, 3).map((song, i) => {
      const likedSongPhoto = song.photoUrl ? 
      <img src={song.photoUrl} /> : null;
      return (
        <div key={i} className="liked-songs"
          onMouseEnter={() => this.setState({ likedSongsHover: song.id })}
          onMouseLeave={() => this.setState({ likedSongsHover: null })}>
          <div className="liked-song-photo">
            {likedSongPhoto}
            {this.state.likedSongsHover === song.id ? 
              <div className="discover-play-button"
                onMouseEnter={() => this.setState({ likedSongsHover: song.id })}>
                <PlayButtonContainer songId={song.id} />
              </div>
            : null
            }
          </div>
          <div className="liked-song-info">
            <div className="liked-song-artist">
              <Link to={`/users/${users[song.artist_id].id}`}>
                {users[song.artist_id].display_name}
              </Link>
            </div>
            <div className="liked-song-title">
              <Link to={`/songs/${song.id}`}>
                {song.title}
              </Link>
            </div>
            <div className="liked-song-stats">
              <div className="liked-song-plays">
                <FontAwesomeIcon icon="play" />
                281
              </div>
              <div className="liked-song-likes">
                <FontAwesomeIcon icon="heart" />
                330
              </div>
              <div className="liked-song-reposts">
                <FontAwesomeIcon icon="retweet" />
                800
              </div>
              <div className="liked-song-comments">
                <FontAwesomeIcon icon="comment-alt" />
                4
              </div>
            </div>
          </div>
        </div>
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
              <div className="sidebar-header">
                <a className="sidebar-header-link">
                  <div className="sidebar-header-left">
                    <FontAwesomeIcon icon="user-friends" />
                    Who to folllow
                  </div>
                  <div className="sidebar-header-right">
                    <FontAwesomeIcon icon="redo-alt" />
                    Refresh
                  </div>
                </a>
                <div className="sidebar-main">
                  {followUsers}
                </div>
              </div>
              <div className="sidebar-header">
                <a className="sidebar-header-link">
                  <div className="sidebar-header-left">
                    <FontAwesomeIcon icon="heart" />
                    87 likes
                  </div>
                  <div className="sidebar-header-right">
                    View all
                  </div>
                </a>
                <div className="sidebar-main">
                  {likedSongs}
                </div>
              </div>
              <div className="sidebar-footer">
                <a href="https://github.com/aydreeyun/vaporwave">
                  GitHub
                </a>
                <p>-</p>
                <a href="https://www.linkedin.com/in/adriantaehyunkim/">
                  Linkedin
                </a>
                <p>-</p>
                <a href="https://angel.co/u/aydreeyun">
                  AngelList
                </a>
                <p>-</p>
                <a href="https://aydreeyun.github.io/">
                  Portfolio
                </a>
              </div>
            </div>
          </div>
        </div>
      </>

    )
  }
}

export default Discover;