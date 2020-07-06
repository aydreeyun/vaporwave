import React from 'react';
import NavbarContainer from '../navbar/navbar_container';
import { Link } from 'react-router-dom';
import { formatUploadTime } from '../../util/time_util';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Comments extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      authorHover: "",
      commentHover: ""
    }
  }

  componentDidMount() {
    scrollTo(0, 0);
    this.props.fetchUserComments(this.props.match.params.userId);
  }

  render() {
    const { user, userComments, songs, currentUser } = this.props;

    const commentList = userComments.map((comment, i) => {
      return (
        <div className="comment-page-item"
          key={i}
          onMouseOver={() => this.setState({ authorHover: comment.author_id, commentHover: comment.id })}
          onMouseLeave={() => this.setState({ authorHover: "", commentHover: "" })}
        >
          <div className="comment-page-item-header">
            <div className="comment-page-item-title">
              on <Link to={`/songs/${songs[comment.song_id].id}`}>{songs[comment.song_id].title}</Link>
            </div>
            <div className="comment-page-item-time">
              {currentUser.id === this.state.authorHover && comment.id === this.state.commentHover ?
                <button onClick={() => this.props.deleteComment(comment.id)}>
                  <FontAwesomeIcon icon="trash" />
                </button>
              : formatUploadTime(comment.created_at)}
            </div>
          </div>
          <div className="comment-page-item-main">
            "{comment.body}"
          </div>
        </div>
      );
    });

    return (
      <>
        <NavbarContainer />
        <div className="comments-page">
          <div className="comments-page-header">
            <div className="comments-header-user">
              <Link to={`/users/${user.id}`}>
                <div className="comments-user-photo">
                  {user.photoUrl ? <img src={user.photoUrl} /> : null}
                </div>
              </Link>
              <div className="comments-user-name">
                <Link to={`/users/${user.id}`}>
                  {user.display_name}
                </Link>
              </div>
            </div>
            <div className="comments-header-links">
              <a>Likes</a>
              <a>Following</a>
              <a>Followers</a>
              <a className="comment-current">Comments</a>
            </div>
          </div>
          <div className="comments-main">
            {commentList}
          </div>
          <div className="comments-page-footer">
            <a href="https://github.com/aydreeyun/vaporwave">
              GitHub
            </a>
            <p>-</p>
            <a href="https://www.linkedin.com/in/adriantaehyunkim/">
              Linkedin
            </a>
            <p>-</p>
            <a href="https://angel.co/u/aydreeyun">
              AngelList
            </a>
            <p>-</p>
            <a href="https://aydreeyun.github.io/">
              Portfolio
            </a>
          </div>
        </div>
      </>
    );
  }
};

export default Comments;
