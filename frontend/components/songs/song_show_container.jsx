import { connect } from 'react-redux';
import SongShow from './song_show';
import { deleteSong, fetchSong, updateSong } from '../../actions/song_actions';
import { receiveCurrentSong } from '../../actions/music_player_actions';

const mSTP = (state, ownProps) => {
  const song = state.entities.songs[ownProps.match.params.songId];
  let artist = state.entities.users[song.artist_id];

  return {
    song: song,
    artist: artist,
    currentUser: state.entities.users[state.session.id],
  };
};

const mDTP = dispatch => {
  return {
    deleteSong: songId => dispatch(deleteSong(songId)),
    fetchSong: songId => dispatch(fetchSong(songId)),
    updateSong: (song, id) => dispatch(updateSong(song, id)),
    receiveCurrentSong: songId => dispatch(receiveCurrentSong(songId)),
  };
};

export default connect(mSTP, mDTP)(SongShow);
