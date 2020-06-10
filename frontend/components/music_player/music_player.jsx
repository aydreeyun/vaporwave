import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { formatSongTime } from '../../util/music_player_util';

class MusicPlayer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      duration: 0,
      timeElapsed: 0,
      volume: 0.1,
      volumeHover: false,
    };

    this.handleMetadata = this.handleMetadata.bind(this);
    this.handlePlay = this.handlePlay.bind(this);
    this.handleRestart = this.handleRestart.bind(this);
    this.handleSkip = this.handleSkip.bind(this);
    this.handleTimeElapsed = this.handleTimeElapsed.bind(this);
    this.handleSkipAhead = this.handleSkipAhead.bind(this);
  }

  componentDidMount() {
    const musicPlayer = document.getElementById("audio");
    musicPlayer.volume = 0.1;
  }

  handleMetadata() {
    const musicPlayer = document.getElementById("audio");
    this.setState({ duration: musicPlayer.duration })
  }

  handlePlay() {
    const musicPlayer = document.getElementById("audio");

    if (this.props.playing) {
      clearInterval(this.playInterval);
      this.props.pauseSong();
      musicPlayer.pause();
    } else {
      this.props.playSong();
      musicPlayer.play();
    }
  }

  handleTimeElapsed() {
    const musicPlayer = document.getElementById("audio");
    const scrollBar = document.getElementById("scrollbar")

    if (!musicPlayer.paused) {
      this.playInterval = setInterval(() => {
        scrollBar.value = musicPlayer.currentTime;
        this.setState({ timeElapsed: musicPlayer.currentTime })
      }, 50)
    }
  }

  handleRestart() {
    const musicPlayer = document.getElementById("audio");
    
    // if (musicPlayer.currentTime < 4) {
      // play previous song array
    // } else {
      musicPlayer.currentTime = 0;
      this.props.playSong();
      musicPlayer.play();
      this.setState({ timeElapsed: 0 });
    // }
  }

  handleSkip() {
    const musicPlayer = document.getElementById("audio");

    musicPlayer.currentTime = this.state.duration;
    this.props.pauseSong();
    this.setState({ timeElapsed: this.state.duration });
  }

  handleSkipAhead(e) {
    const musicPlayer = document.getElementById("audio");

    musicPlayer.currentTime = e.target.value;
    this.setState({ timeElapsed: e.target.value });
  }

  handleVolume() {

  }

  render() {
    const { currentSong, artist, playing } = this.props;
    let songUrl;

    if (currentSong) {
      songUrl = currentSong.songUrl;
    }

    const musicPlayer =
    <div className="music-player">
      <div className="music-player-main">
        <div className="music-player-buttons">
          <button className="rewind-button"
            onClick={this.handleRestart}>
          <FontAwesomeIcon icon="step-backward"/>
          </button>

          <button className="player-play-button"
            onClick={this.handlePlay}>
            {playing ? <FontAwesomeIcon icon="pause"/> : 
            <FontAwesomeIcon icon="play" />}
          </button>

          <button className="skip-button"
            onClick={this.handleSkip}>
          <FontAwesomeIcon icon="step-forward"/>
          </button>

          <button className="shuffle-button">
          <FontAwesomeIcon icon="random"/>
          </button>

          <button className="loop-button">
          <FontAwesomeIcon icon="redo-alt"/>
          </button>
          <div className="song-time">
            <p className="current-time">
              {formatSongTime(this.state.timeElapsed)}
            </p>

            <input className="scrollbar"
              id="scrollbar"
              type="range"
              min="0"
              defaultValue="0"
              max={this.state.duration}
              onInput={this.handleSkipAhead} />

            <p className="song-length">
              {formatSongTime(this.state.duration)}
            </p>
          </div>
          <div className="volume"
            onMouseEnter={() => this.setState({ volumeHover: true })}
            onMouseLeave={() => this.setState({ volumeHover: false })}>
            <button>
              { this.state.volumeHover ? 
                <div className="volume-bar"
                  onMouseEnter={() => this.setState({ volumeHover: true })}>
                  <input type="range"/>
                </div> 
                : null
              }
              <FontAwesomeIcon icon="volume-up"/>
            </button>
          </div>
        </div>
        <div className="player-song-data">
          <Link className="player-song-image" to={`/songs/${currentSong.id}`}>
            {currentSong.photoUrl ?
              <img src={currentSong.photoUrl} />
            : null
            }
          </Link>
          <div className="player-song-links">
            <Link className="player-artist"
              to={`/${artist.display_name}`}>
              {artist.display_name}
            </Link>
            <Link className="player-title"
              to={`/songs/${currentSong.id}`}>
              {currentSong.title}
            </Link>
          </div>
        </div>
      </div>
    </div>

    return (
      <>
        <audio id="audio" 
          src={songUrl}
          controls
          controlsList="nodownload"
          onLoadedMetadata={this.handleMetadata}
          onPlaying={this.handleTimeElapsed}
        />
        {musicPlayer}
      </>
    );
  }
};

export default MusicPlayer;
