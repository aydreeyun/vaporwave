import React from 'react';
import NavbarContainer from '../navbar/navbar_container';
import { Link } from 'react-router-dom';
import { formatUploadTime } from '../../util/time_util';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PlayButtonContainer from '../music_player/play_button_container';

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
    this.handleFileClick = this.handleFileClick.bind(this);
    this.handlePhotoFile = this.handlePhotoFile.bind(this);
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

  handleFileClick() {
    document.getElementById("file").click();
  }

  handlePhotoFile(e) {
    e.preventDefault();
    const { song } = this.props;
    const file = e.target.files[0];
    
    if (file) {
      const formData = new FormData();
      formData.append('song[photo]', file);

      this.props.updateSong(formData, song.id)
    }
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
    const songPhoto = song.photoUrl ?
      <img className="song-show-photo"
        src={song.photoUrl} />
    : null;

    // CSS CLASS SWITCHES
    const liked = this.state.liked === "Liked" ?
      "liked" : "";
    const followed = this.state.followed === "Following" ?
      "followed" : "";
    const followedIcon = this.state.followed === "Following" ?
      <FontAwesomeIcon icon="user-check" />
    : <FontAwesomeIcon icon="user-plus" />;

    // CONDITIONAL BUTTONS
    const deleteButton = currentUser === artist && this.state.dropdown ?
      <div className="song-delete">
        <button onMouseDown={e => e.preventDefault()}
          onClick={this.handleDelete}>
          <FontAwesomeIcon icon="trash" />
          Delete track
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

    const uploadPhotoButton = artist !== currentUser ?
    null : !song.photoUrl && artist === currentUser ?
      <button className="upload-photo"
        onClick={this.handleFileClick}>
        <FontAwesomeIcon icon="camera" />
        Upload image
        <input type="file"
          id="file"
          accept="image/*"
          onChange={this.handlePhotoFile} 
        />
      </button> 
    : <button className="upload-photo"
        onClick={this.handleFileClick}>
        <FontAwesomeIcon icon="camera" />
        Update image
        <input type="file"
          id="file"
          accept="image/*"
          onChange={this.handlePhotoFile} 
        />
      </button>;

    return (
      <>
        <NavbarContainer />
        <div className="song-show-page">
          <div className="song-banner">
            <div className="song-show-play">
              <PlayButtonContainer songId={song.id} />
            </div>

            <div className="song-banner-info">
              <div className="song-banner-top">
                <h2 className="song-banner-artist">
                  <Link to={`/users/${artist.id}`}>
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

            <div className="song-banner-photo">
              {songPhoto}
              {uploadPhotoButton}
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
                    <FontAwesomeIcon icon="heart" />
                    {this.state.liked}
                  </button>
                  <button>
                    <FontAwesomeIcon icon="retweet" />
                    Repost
                  </button>
                  <button>
                    <FontAwesomeIcon icon="share-square" />
                    Share
                  </button>
                  <button>
                    <FontAwesomeIcon icon="bars" />
                    Add to Next up
                  </button>
                  <div className="more-dropdown">
                    <button onClick={this.handleDropdown} 
                      onBlur={this.handleBlur}>
                      <FontAwesomeIcon icon="ellipsis-h" />
                      More
                    </button>
                    {deleteButton}
                  </div>
                </div>

                <div className="song-stats">
                  <div>
                    <FontAwesomeIcon icon="play" />
                    <p>281</p>
                  </div>
                  <div>
                    <FontAwesomeIcon icon="heart" />
                    <p>330</p>
                  </div>
                  <div>
                    <FontAwesomeIcon icon="retweet" />
                    <p>8,004</p>
                  </div>
                </div>
              </div>

              {/* artist profile link */}
              <div className="song-comments-index">
                <div className="song-comments-artist">
                  <Link to={`/${artist.display_name}`}>
                    <div className="artist-photo">
                      {artist.photoUrl ? <img src={artist.photoUrl} /> : null}
                    </div>
                    <p className="artist-profile">
                      {artist.display_name}
                    </p>
                  </Link>
                  <div className="artist-stats">
                    <p>
                      <FontAwesomeIcon icon="user-friends" />
                      101
                    </p>
                    <p>
                      <FontAwesomeIcon icon="music" />
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
                      <FontAwesomeIcon icon="comment-alt" />
                      1 comment
                    </div>
                    {/* comments go here */}
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
