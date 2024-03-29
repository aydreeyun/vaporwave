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
      followed: "Follow",
      comment: "",
      authorHover: "",
      commentHover: "",
    };

    this.handleDropdown = this.handleDropdown.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleLike = this.handleLike.bind(this);
    this.handleFollow = this.handleFollow.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleFileClick = this.handleFileClick.bind(this);
    this.handlePhotoFile = this.handlePhotoFile.bind(this);
    this.handleCommentSubmit = this.handleCommentSubmit.bind(this);
  }

  componentDidMount() {
    scrollTo(0, 0);
    this.props.fetchSong(this.props.match.params.songId);
    this.props.fetchSongComments(this.props.match.params.songId);
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

  update(field) {
    return e => this.setState({ [field]: e.target.value });
  }

  handleCommentSubmit(e) {
    e.preventDefault();

    const comment = {
      author_id: this.props.currentUser.id, 
      song_id: this.props.song.id, 
      body: this.state.comment
    };

    this.setState({ comment: "" });
    this.props.createComment(comment);
  }

  render() {
    const { users, song, artist, currentUser, comments } = this.props;
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
    const allComments = Object.values(comments).reverse().map((comment, i) => {
      return (
        <div className={`comment-item ${song.artist_id === comment.author_id ? "artist-comment" : ""}`}
          key={i}
          onMouseOver={() => this.setState({ authorHover: comment.author_id, commentHover: comment.id })}
          onMouseLeave={() => this.setState({ authorHover: "", commentHover: "" })}
        >
          <div className="comment-item-photo">
            <Link to={`/users/${comment.author_id}`}>
              <div>
                {users[comment.author_id].photoUrl ? <img src={users[comment.author_id].photoUrl} /> : null}
              </div>
            </Link>
          </div>
          <div className="comment-item-content">
            <div className="comment-item-header">
              <div>
                {currentUser.id === comment.author_id ?
                  "You" :
                  <Link to={`/users/${comment.author_id}`}>
                    {users[comment.author_id].display_name}
                  </Link>}
              </div>
              <div>
                {formatUploadTime(comment.created_at)}
              </div>
            </div>
            <div className="comment-item-body">
              <div>
                {comment.body}
              </div>
              {currentUser.id === this.state.authorHover && comment.id === this.state.commentHover ?
                <button onClick={() => this.props.deleteComment(comment.id)}>
                  <FontAwesomeIcon icon="trash" />
                </button>
              : null
              }
            </div>
          </div>
        </div>
      )
    });
    const commentSection = Object.values(comments).length > 0 ?
      <div className="comments-section">
        <div className="comments-header">
          <FontAwesomeIcon icon="comment-alt" />
          {allComments.length} {allComments.length === 1 ? "comment" : "comments"}
        </div>
        <div>
          {allComments}
        </div>
      </div>
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
              <div className="song-comments-form-container">
                <div className="artist-comment-photo">
                  {currentUser.photoUrl ? <img src={currentUser.photoUrl} /> : null}
                </div>
                <form className="song-comments-form" onSubmit={this.handleCommentSubmit}>
                  <input type="text"
                    value={this.state.comment}
                    onChange={this.update('comment')}
                    placeholder="Write a comment"
                  />
                </form>
              </div>

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
              
              <div className="song-comments-index">
                <div className="song-comments-artist">
                  <Link to={`/users/${artist.id}`}>
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
                  {commentSection}
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
