import { connect } from 'react-redux';
import Discover from './discover';

const mSTP = state => {
  return {
    users: state.entities.users,
    songs: Object.values(state.entities.songs),
  };
};

// const mDTP = dispatch => {
//   return {

//   };
// };

export default connect(mSTP)(Discover);