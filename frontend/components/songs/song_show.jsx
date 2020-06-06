import React from 'react';
import NavbarContainer from '../navbar/navbar_container';
import { Link, Redirect } from 'react-router-dom';
import { formatUploadTime } from '../../util/time_util';

class SongShow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dropdown: false,
    };

    this.handleDropdown = this.handleDropdown.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
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

  render() {
    const { song, artist, currentUser, deleteSong, match } = this.props;
    if (song) {
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

      const deleteButton = currentUser === artist && this.state.dropdown ?
      <div className="song-delete">
        <button onMouseDown={e => e.preventDefault()}
          onClick={() => deleteSong(match.params.songId)}
        >
          <i className="fas fa-trash"></i>
          Delete song
        </button>
      </div>
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
                    <button className="song-show-button">
                      <i className="fas fa-heart"></i>
                      Like
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
                    <button onClick={this.handleDropdown} 
                      onBlur={this.handleBlur}
                    >
                      <i className="fas fa-ellipsis-h"></i>
                      More
                    </button>
                    {deleteButton}
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
                    <Link to={`/${artist.display_name}`}>{artist.display_name}</Link>
                    <p><i className="fas fa-user-friends"></i>110</p>
                    <p><i className="fas fa-music"></i>101</p>
                    {/* <button>Follow</button> */}
                  </div>

                  {description}
                </div>

                {/* comments go here */}
              </div>
            </div>
          </div>
        </>
      );
    } else {
      return <Redirect to="/discover" />
    }
  }
};

export default SongShow;
