import React from 'react';
import NavbarContainer from '../navbar/navbar_container';
import { Link } from 'react-router-dom';

class SongShow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const genre = this.props.song.genre ? <h3 className="song-banner-genre"># {this.props.song.genre}</h3> : null;
    const description = this.props.song.description ? <p className="song-desc">{this.props.song.description}</p> : null;

    return (
      <>
        <NavbarContainer />
        <div className="song-show-page">
          <div className="song-banner">
            <div className="song-banner-info">
              <div className="song-banner-top">
                <h2 className="song-banner-artist">
                  <Link to={`/${this.props.artist.display_name}`}>
                    {this.props.artist.display_name}  
                  </Link> 
                </h2>
                <h3 className="song-banner-created-at">
                  {this.props.song.created_at}
                </h3>
              </div>

              <div className="song-banner-bottom">
                <h1 className="song-banner-title">
                  {this.props.song.title}
                </h1>
                {genre}
              </div>
            </div>
          </div>

          <div className="song-comments">
            {/* comment form - to be replaced */}
            <div className="song-comments-form">
              <form>
                <input type="text" placeholder="Write a comment"/>
              </form>
            </div>

            <button className="song-show-button"><i className="fas fa-heart"></i>Like</button>
            {/* <button>Repost</button>
            <button>Share</button>
            <button>Add to Next up</button>
            <button>More</button> */}
            <p className="song-stats">
              <i class="fas fa-play"></i>281
            </p>
            <p className="song-stats">
              <i class="fas fa-heart"></i>330
            </p>
            <p className="song-stats">
              <i class="fas fa-retweet"></i>8004
            </p>

            {/* artist profile link */}
            <Link to={`/${this.props.artist.display_name}`}>{this.props.artist.display_name}</Link>
            <p>110</p>
            <p>101</p>
            {/* <button>Follow</button> */}

            {description}

            {/* comments go here */}
          </div>
        </div>
      </>
    );
  }
};

export default SongShow;
