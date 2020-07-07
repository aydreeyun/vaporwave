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
      volume: 0.05,
      mutedVolume: 0.0,
      volumeHover: false,
    };

    this.handleMetadata = this.handleMetadata.bind(this);
    this.handlePlay = this.handlePlay.bind(this);
    this.handleRewind = this.handleRewind.bind(this);
    this.handleSkip = this.handleSkip.bind(this);
    this.handleTimeElapsed = this.handleTimeElapsed.bind(this);
    this.handleNextSong = this.handleNextSong.bind(this);
    this.handleSkipAhead = this.handleSkipAhead.bind(this);
    this.handleVolume = this.handleVolume.bind(this);
    this.handleMute = this.handleMute.bind(this);
  }

  componentDidMount() {
    const musicPlayer = document.getElementById("audio");
    musicPlayer.volume = 0.05;
    setTimeout(() => this.props.receiveQueue(this.props.songs), 1000);
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
      }, 50);
    }
  }

  handleNextSong() {
    this.props.receivePreviousSong(this.props.currentSong.id);
    this.props.receiveCurrentSong(this.props.queue.shift());
    this.props.playSong();
    this.setState({ timeElapsed: 0 });
  }

  handleRewind() {
    const musicPlayer = document.getElementById("audio");
    
    if (musicPlayer.currentTime < 5 && this.props.played.length > 0) {
      this.props.receiveNextSong(this.props.currentSong.id);
      this.props.receiveCurrentSong(this.props.played.pop());
    } else {
      musicPlayer.currentTime = 0;
      this.props.playSong();
      musicPlayer.play();
      this.setState({ timeElapsed: 0 });
    }
  }

  handleSkip() {
    const musicPlayer = document.getElementById("audio");

    this.props.receivePreviousSong(this.props.currentSong.id);
    this.props.receiveCurrentSong(this.props.queue.shift());
    musicPlayer.currentTime = 0;
    this.props.playSong();
    this.setState({ timeElapsed: 0 });
  }

  handleSkipAhead(e) {
    const musicPlayer = document.getElementById("audio");

    musicPlayer.currentTime = e.target.value;
    this.setState({ timeElapsed: e.target.value });
  }

  handleVolume(e) {
    const musicPlayer = document.getElementById("audio");

    musicPlayer.volume = e.target.value / 1000.0;
    this.setState({ volume: e.target.value / 1000.0 });
  }

  handleMute() {
    const musicPlayer = document.getElementById("audio");
    const volumeBar = document.getElementById("volume");

    if (musicPlayer.volume > 0) {
      this.setState({ volume: 0, mutedVolume: musicPlayer.volume });
      musicPlayer.volume = 0;
      volumeBar.value = 0;
    } else {
      this.setState({ volume: this.state.mutedVolume });
      musicPlayer.volume = this.state.mutedVolume;
      volumeBar.value = this.state.mutedVolume * 1000.0;
    }
  }

  render() {
    const { currentSong, artist, playing } = this.props;
    let songUrl;
    let volumeIcon;

    if (currentSong) {
      songUrl = currentSong.songUrl;
      const musicPlayer = document.getElementById("audio");

      if (musicPlayer.volume > 0.5) {
        volumeIcon = <FontAwesomeIcon className="volume-up"
          icon="volume-up"
          onClick={this.handleMute}/>;
      } else if (musicPlayer.volume <= 0.5 && musicPlayer.volume !== 0) {
        volumeIcon = <FontAwesomeIcon className="volume-down"
          icon="volume-down"
          onClick={this.handleMute}/>
      } else {
        volumeIcon = <FontAwesomeIcon className="volume-mute"
          icon="volume-mute"
          onClick={this.handleMute}/>
      }
    }
    

    const musicPlayerComponent = currentSong ?
    <div className="music-player">
      <div className="music-player-main">
        <div className="music-player-buttons">
          <button className="rewind-button"
            onClick={this.handleRewind}>
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
              {
              this.state.volumeHover ? 
                <div className="volume-bar"
                  onMouseEnter={() => this.setState({ volumeHover: true })}>
                  <input type="range"
                    id="volume"
                    min="0.0"
                    defaultValue={this.state.volume * 1000.0}
                    max="1000.0"
                    onChange={this.handleVolume}/>
                </div> 
              : null
              }
              {volumeIcon}
            </button>
          </div>
        </div>
        <div className="player-song-data">
          <Link className="player-song-image" to={`/songs/${currentSong.id}`}>
            {currentSong.photoUrl ? <img src={currentSong.photoUrl} /> : null}
          </Link>
          <div className="player-song-links">
            <Link className="player-artist"
              to={`/users/${artist.id}`}>
              {artist.display_name}
            </Link>
            <Link className="player-title"
              to={`/songs/${currentSong.id}`}>
              {currentSong.title}
            </Link>
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
          onPlaying={this.handleTimeElapsed}
          onEnded={this.handleNextSong}
        />
        {musicPlayerComponent}
      </>
    );
  }
};

export default MusicPlayer;
