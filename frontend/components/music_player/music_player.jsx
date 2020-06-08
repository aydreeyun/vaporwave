import React from 'react';

class MusicPlayer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
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

  render() {
    const { currentSong, artist, playing } = this.props;

    let songUrl;
    if (currentSong) {
      songUrl = currentSong.songUrl;
    }

    return (
      <div>
        <audio id="audio" 
          src={songUrl}
          controls
          controlsList="nodownload"
        />
      </div>
    );
  }
};

export default MusicPlayer;
