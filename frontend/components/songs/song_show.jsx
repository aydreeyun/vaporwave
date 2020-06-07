import React from 'react';
import NavbarContainer from '../navbar/navbar_container';
import { Link, Redirect } from 'react-router-dom';
import { formatUploadTime } from '../../util/time_util';

class SongShow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dropdown: false,
      liked: "Like",
      followed: "Follow"
    };

    this.handleDropdown = this.handleDropdown.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleLike = this.handleLike.bind(this);
    this.handleFollow = this.handleFollow.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    scrollTo(0, 0);
    this.props.fetchSong(this.props.match.params.songId);
  }

  handleDropdown() {
    if (this.state.dropdown) {
      this.setState({ dropdown: false });
    } else {
      this.setState({ dropdown: true });
    }
  }

  handleBlur() {
    if (this.state.dropdown) {
      this.setState({ dropdown: false });
    }
  }

  handleLike() {
    if (this.state.liked === "Like") {
      this.setState({ liked: "Liked" });
    } else {
      this.setState({ liked: "Like" });
    }
  }

  handleFollow() {
    if (this.state.followed === "Follow") {
      this.setState({ followed: "Following" });
    } else {
      this.setState({ followed: "Follow" });
    }
  }

  handleDelete() {
    this.props.history.push("/discover");
    this.props.deleteSong(this.props.match.params.songId);
  }

  render() {
    const { song, artist, currentUser } = this.props;
    //  CONDITIONAL SONG DATA
    const genre = song.genre ?
    <h3 className="song-banner-genre">
      # {song.genre}
    </h3>
    : null;
    const description = song.description ?
    <p className="song-desc">
      {song.description}
    </p>
    : null;

    // CSS CLASS SWITCHES
    const liked = this.state.liked === "Liked" ?
    "liked" : "";
    const followed = this.state.followed === "Following" ?
    "followed" : "";
    const followedIcon = this.state.followed === "Following" ?
    <i className="fas fa-user-check"></i> 
    : <i className="fas fa-user-plus"></i>;

    // CONDITIONAL BUTTONS
    const deleteButton = currentUser === artist && this.state.dropdown ?
    <div className="song-delete">
      <button onMouseDown={e => e.preventDefault()}
        onClick={this.handleDelete}>
        <i className="fas fa-trash"></i>
        Delete song
      </button>
    </div>
    : null;

    const followButton = currentUser !== artist ?
    <button className={`artist-follow ${followed}`}
      onClick={this.handleFollow}>
      {followedIcon}
      {this.state.followed}
    </button>
    : null;

    return (
      <>
        <NavbarContainer />
        <div className="song-show-page">
          <div className="song-banner">
            <div className="song-banner-info">
              <div className="song-banner-top">
                <h2 className="song-banner-artist">
                  <Link to={`/${artist.display_name}`}>
                    {artist.display_name}  
                  </Link> 
                </h2>
                <h3 className="song-banner-created-at">
                  {formatUploadTime(song.created_at)}
                </h3>
              </div>

              <div className="song-banner-bottom">
                <h1 className="song-banner-title">
                  {song.title}
                </h1>
                {genre}
              </div>
            </div>
          </div>

          <div className="song-comments">
            <div className="song-comments-container">
              {/* comment form - to be replaced */}
              <form className="song-comments-form">
                <input type="text" placeholder="Write a comment"/>
              </form>

              <div className="song-comments-stats">
                <div className="song-stats-buttons">
                  <button className={`song-show-button ${liked}`}
                    onClick={this.handleLike}>
                    <i className="fas fa-heart"></i>
                    {this.state.liked}
                  </button>
                  <button>
                    <i className="fas fa-retweet"></i>
                    Repost
                  </button>
                  <button>
                    <i className="fas fa-share-square"></i>
                    Share
                  </button>
                  <button>
                    <i className="fas fa-bars"></i>
                    Add to Next up
                  </button>
                  <div className="more-dropdown">
                    <button onClick={this.handleDropdown} 
                      onBlur={this.handleBlur}>
                      <i className="fas fa-ellipsis-h"></i>
                      More
                    </button>
                    {deleteButton}
                  </div>
                </div>

                <div className="song-stats">
                  <div>
                    <i className="fas fa-play"></i>
                    <p>281</p>
                  </div>
                  <div>
                    <i className="fas fa-heart"></i>
                    <p>330</p>
                  </div>
                  <div>
                    <i className="fas fa-retweet"></i>
                    <p>8,004</p>
                  </div>
                </div>
              </div>

              {/* artist profile link */}
              <div className="song-comments-index">
                <div className="song-comments-artist">
                  <Link to={`/${artist.display_name}`}>
                    <div className="artist-photo">
                      PROFILE PHOTO HERE
                    </div>
                    <p className="artist-profile">
                      {artist.display_name}
                    </p>
                  </Link>
                  <div className="artist-stats">
                    <p>
                      <i className="fas fa-user-friends"></i>
                      101
                    </p>
                    <p>
                      <i className="fas fa-music"></i>
                      11
                    </p>
                  </div>
                  {followButton}
                </div>

                <div className="song-desc-and-comments">
                  {description}

                  <div className="comments-section">
                    <div className="comments-header">
                      {/* REPLACE COMMENT # AFTER CREATED */}
                      <i className="fas fa-comment-alt"></i>
                      1 comment
                    </div>
                    {/* comments go here */}
                    
                    {/* AUDIO WORKS */}
                    <audio controls>
                      <source src={song.songUrl} type="audio/mpeg"/>
                    </audio>
                  </div>
                </div>
                
              </div>

            </div>
          </div>
        </div>
      </>
    );
  }
};

export default SongShow;
