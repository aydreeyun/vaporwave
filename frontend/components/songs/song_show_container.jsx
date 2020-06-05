import { connect } from 'react-redux';
import SongShow from './song_show';
import { deleteSong, fetchSong } from '../../actions/song_actions';

const mSTP = (state, ownProps) => {
  const song = state.entities.songs[ownProps.match.params.songId];
  const artist = state.entities.users[song.artist_id];

  return {
    song: song,
    artist: artist
  };
};

const mDTP = dispatch => {
  return {
    deleteSong: songId => dispatch(deleteSong(songId)),
    fetchSong: songId => dispatch(fetchSong(songId)),
  };
};

export default connect(mSTP, mDTP)(SongShow);
