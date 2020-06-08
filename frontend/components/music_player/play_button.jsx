import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class PlayButton extends React.Component {
  constructor(props) {
    super(props);

    this.handlePlay = this.handlePlay.bind(this);
  }

  handlePlay() {
    const musicPlayer = document.getElementById("audio");
    musicPlayer.setAttribute("autoPlay", "");

    if (this.props.playing) {
      this.props.pauseSong();
      musicPlayer.pause();
    } else {
      this.props.receiveCurrentSong(this.props.songId);
      this.props.playSong();
      musicPlayer.play();
    }
  }

  render() {
    const playIcon = this.props.playing && this.props.currentSong.id === this.props.songId ?
    <FontAwesomeIcon className="pause-icon" icon="pause" />
    : <FontAwesomeIcon className="play-icon" icon="play" />;

    return (
      <button className="play-button"
        onClick={this.handlePlay}>
        {playIcon}
      </button>
    );
  }
};

export default PlayButton;
