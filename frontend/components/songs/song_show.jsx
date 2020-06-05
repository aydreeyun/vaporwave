import React from 'react';
import NavbarContainer from '../navbar/navbar_container';
import { Link } from 'react-router-dom';

class SongShow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const genre = this.props.song.genre ? <h3># {this.props.song.genre}</h3> : null;
    const description = this.props.song.description ? <p>{this.props.song.description}</p> : null;

    return (
      <div className="song-show-page">
        <NavbarContainer />
        <h2>{this.props.artist.display_name}</h2>
        <h1>{this.props.song.title}</h1>
        <h3>{this.props.song.created_at}</h3>
        {genre}

        {/* comment form - to be replaced */}
        <form>
          <input type="text" placeholder="Write a comment"/>
        </form>

        <button>Like</button>
        {/* <button>Repost</button>
        <button>Share</button>
        <button>Add to Next up</button>
        <button>More</button> */}
        <p>281</p>
        <p>330</p>
        <p>8004</p>

        {/* artist profile link */}
        <Link to={`/${this.props.artist.display_name}`}>{this.props.artist.display_name}</Link>
        <p>110</p>
        <p>101</p>
        {/* <button>Follow</button> */}

        {description}

        {/* comments go here */}
      </div>
    );
  }
};

export default SongShow;
