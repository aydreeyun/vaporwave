import React from 'react';

class MusicPlayer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      playing: props.playing,
    };
  }

  handlePlay() {
    if (this.state.playing) {
      this.props.pauseSong();
      this.setState({ playing: false });
    } else {
      this.props.playSong();
      this.setState({ playing: true });
    }
  }

  render() {
    return (
      <div>
        <audio>

        </audio>
      </div>
    );
  }
};

export default MusicPlayer;
