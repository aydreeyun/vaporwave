import React from 'react';
import NavbarContainer from '../navbar/navbar_container';
import { Link } from 'react-router-dom';
import { formatUploadTime } from '../../util/time_util';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Comments extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchUserComments(this.props.match.params.userId);
  }

  render() {
    const { user, userComments, songs } = this.props;

    const commentList = userComments.reverse().map((comment, i) => {
      return (
        <div className="comment-page-item" key={i}>
          <div className="comment-page-item-header">
            <div className="comment-page-item-title">
              on <Link to={`/songs/${songs[comment.song_id].id}`}>{songs[comment.song_id].title}</Link>
            </div>
            <div className="comment-page-item-time">
              {formatUploadTime(comment.created_at)}
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
            <a href="https://www.linkedin.com/in/adriantaehyunkim/">
              GitHub
            </a>
            <p>-</p>
            <a href="https://github.com/aydreeyun/vaporwave">
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
