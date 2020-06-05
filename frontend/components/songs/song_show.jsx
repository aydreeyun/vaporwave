import React from 'react';
import NavbarContainer from '../navbar/navbar_container';
import { Link } from 'react-router-dom';

class SongShow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { song, artist, currentUser, deleteSong, fetchSong, openModal, closeModal } = this.props;
    const genre = song.genre ? <h3 className="song-banner-genre"># {song.genre}</h3> : null;
    const description = song.description ? <p className="song-desc">{song.description}</p> : null;
    const deleteButton = currentUser === artist ? <button onClick={() => deleteSong(this.props.match.params.songId)}>Delete</button> : null;

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
                  {song.created_at}
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
                    <i className="fas fa-heart"></i>Like</button>
                  {/* <button>
                    <i className="fas fa-retweet"></i>Repost
                  </button>
                  <button>
                    <i className="fas fa-share-square"></i>Share
                  </button>
                  <button>
                    <i className="fas fa-bars"></i>Add to Next up
                  </button> */}
                  <button><i className="fas fa-ellipsis-h"></i>More</button>
                  {deleteButton}
                </div>

                <div className="song-stats">
                  <i className="fas fa-play"></i>
                  <p>281</p>
                  <i className="fas fa-heart"></i>
                  <p>330</p>
                  <i className="fas fa-retweet"></i>
                  <p>8,004</p>
                </div>
              </div>

              {/* artist profile link */}
              <Link to={`/${artist.display_name}`}>{artist.display_name}</Link>
              <p><i className="fas fa-user-friends"></i>110</p>
              <p><i className="fas fa-music"></i>101</p>
              {/* <button>Follow</button> */}

              {description}

              {/* comments go here */}
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default SongShow;
