import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { formatSongTime } from '../../util/music_player_util';

class MusicPlayer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      volume: 0.5,
      volumeHover: false,
      duration: "0:00",
    };

    this.handleMetadata = this.handleMetadata.bind(this);
  }

  componentDidMount() {
    const musicPlayer = document.getElementById("audio");
    musicPlayer.volume = 0.5;
  }

  handleMetadata() {
    const musicPlayer = document.getElementById("audio");
    this.setState({ duration: formatSongTime(musicPlayer.duration) })
  }

  handlePlay() {
    const musicPlayer = document.getElementById("audio");
    if (this.state.playing) {
      this.props.pauseSong();
      musicPlayer.pause();
    } else {
      this.props.playSong();
      this.musicPlayer.play();
    }
  }

  handleVolume() {

  }

  render() {
    const { currentSong, artist, playing } = this.props;
    let songUrl;

    if (currentSong) {
      songUrl = currentSong.songUrl;
    }

    const musicPlayer = currentSong ?
    <div className="music-player">
      <div className="music-player-main">

          <div className="music-player-buttons">
            <button className="rewind-button">
            <FontAwesomeIcon icon="step-backward"/>
            </button>

            <button className="player-play-button">
              {playing ? <FontAwesomeIcon icon="pause"/> : <FontAwesomeIcon icon="play" />}
            </button>

            <button className="skip-button">
            <FontAwesomeIcon icon="step-forward"/>
            </button>

            <button className="shuffle-button">
            <FontAwesomeIcon icon="random"/>
            </button>

            <button className="loop-button">
            <FontAwesomeIcon icon="redo-alt"/>
            </button>

            <p className="current-time">0:00</p>

            <input className="scrollbar"
              type="range"/>

            <p className="song-length">{this.state.duration}</p>

            <button className="volume">
            <FontAwesomeIcon icon="volume-up"/>
            </button>
          </div>
          <div className="player-song-data">
            <Link className="player-song-image" to={`/songs/${currentSong.id}`}>

            </Link>
            <div className="player-song-links">
              <Link to={`/${artist.display_name}`}>DemoUser</Link>
              <Link to={`/songs/${currentSong.id}`}>poop</Link>
            </div>
          </div>
      </div>
    </div> : null;

    return (
      <>
        <audio id="audio" 
          src={songUrl}
          controls
          controlsList="nodownload"
          onLoadedMetadata={this.handleMetadata}
        />

<div className="music-player">
  <div className="music-player-main">

      <div className="music-player-buttons">
        <button className="rewind-button">
        <FontAwesomeIcon icon="step-backward"/>
        </button>

        <button className="player-play-button">
          {playing ? <FontAwesomeIcon icon="pause"/> : <FontAwesomeIcon icon="play" />}
        </button>

        <button className="skip-button">
        <FontAwesomeIcon icon="step-forward"/>
        </button>

        <button className="shuffle-button">
        <FontAwesomeIcon icon="random"/>
        </button>

        <button className="loop-button">
        <FontAwesomeIcon icon="redo-alt"/>
        </button>

        <p className="current-time">0:00</p>

        <input className="scrollbar"
          type="range"/>

        <p className="song-length">{this.state.duration}</p>

        <button className="volume">
        <FontAwesomeIcon icon="volume-up"/>
        </button>
      </div>
      <div className="player-song-data">
        <Link className="player-song-image" to={`/songs/${currentSong.id}`}>

        </Link>
        <div className="player-song-links">
          <Link to={`/${artist.display_name}`}>DemoUser</Link>
          <Link to={`/songs/${currentSong.id}`}>poop</Link>
        </div>
      </div>
  </div>
    </div>
        {/* {musicPlayer} */}
      </>
    );
  }
};

export default MusicPlayer;
