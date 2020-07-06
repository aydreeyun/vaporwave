import { connect } from 'react-redux';
import SongShow from './song_show';
import { deleteSong, fetchSong, updateSong } from '../../actions/song_actions';
import { receiveCurrentSong } from '../../actions/music_player_actions';
import { fetchSongComments, createComment, deleteComment } from '../../actions/comment_actions';

const mSTP = (state, ownProps) => {
  const song = state.entities.songs[ownProps.match.params.songId];
  let artist = state.entities.users[song.artist_id];

  return {
    users: state.entities.users,
    song: song,
    artist: artist,
    currentUser: state.entities.users[state.session.id],
    comments: state.entities.comments,
  };
};

const mDTP = dispatch => {
  return {
    deleteSong: songId => dispatch(deleteSong(songId)),
    fetchSong: songId => dispatch(fetchSong(songId)),
    updateSong: (song, id) => dispatch(updateSong(song, id)),
    receiveCurrentSong: songId => dispatch(receiveCurrentSong(songId)),
    fetchSongComments: songId => dispatch(fetchSongComments(songId)),
    createComment: comment => dispatch(createComment(comment)),
    deleteComment: commentId => dispatch(deleteComment(commentId)),
  };
};

export default connect(mSTP, mDTP)(SongShow);
