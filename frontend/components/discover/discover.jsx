import React from 'react';
import NavbarContainer from '../navbar/navbar_container';
import { Link } from 'react-router-dom';
import MusicPlayerContainer from '../music_player/music_player_container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Discover extends React.Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   followed: "Follow",
    // }

    // this.handleFollow = this.handleFollow.bind(this);
  }

  componentDidMount() {
    this.props.fetchUsers();
    this.props.fetchSongs();
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

  render() {
    const { songs, users, receiveCurrentSong, currentUser } = this.props;
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

    const randomArr = (arr, num) => {
      let newArr = [];

      while (newArr.length < num) {
        let randomNum = Math.floor(Math.random() * arr.length);

        if (!newArr.includes(arr[randomNum]) && arr[randomNum] !== currentUser) {
          newArr.push(arr[randomNum]);
        }
      }

      return newArr;
    }

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

    const followUsers = randomArr(Object.values(users), 3).map(user => {
      return (
        <div className="follow-user">
          <div className="follow-user-photo">
            {/* user profile photo */}
            {/* <img src={} /> */}
          </div>
          <div className="follow-user-info">
            <Link to={`/${user.display_name}`}>
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

    const likedSongs = randomArr(Object.values(songs), 3).map(song => {
      const likedSongPhoto = song.photoUrl ? 
      <img src={song.photoUrl} /> : null;
      return (
        <div className="liked-songs">
          <div className="liked-song-photo">
            {likedSongPhoto}
          </div>
          <div className="liked-song-info">
            <div className="liked-song-artist">
              <Link to={`/${users[song.artist_id].display_name}`}>
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
                <a href="https://www.linkedin.com/in/adriantaehyunkim/">
                  GitHub
                </a>
                <p>-</p>
                <a href="https://github.com/aydreeyun/vaporwave">
                  Linkedin
                </a>
                <p>-</p>
                <a>
                  AngelList
                </a>
              </div>
            </div>
          </div>
        </div>

        <MusicPlayerContainer />
      </>

    )
  }
}

export default Discover;