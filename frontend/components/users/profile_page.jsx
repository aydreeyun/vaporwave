import React from 'react';
import NavbarContainer from '../navbar/navbar_container';
import { formatUploadTime } from '../../util/time_util';
import PlayButtonContainer from '../music_player/play_button_container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

class ProfilePage extends React.Component {
  constructor(props) {
    super(props);

    this.handleFileClick = this.handleFileClick.bind(this);
    this.handlePhotoFile = this.handlePhotoFile.bind(this);
  }

  componentDidMount() {
    scrollTo(0, 0);
    this.props.fetchUser(this.props.match.params.userId);
  }

  handleFileClick() {
    document.getElementById("file").click();
  }

  handlePhotoFile(e) {
    e.preventDefault();
    const { user } = this.props;
    const file = e.target.files[0];
    
    if (file) {
      const formData = new FormData();
      formData.append('user[photo]', file);

      this.props.updateUser(formData, user.id)
    }
  }

  render() {
    const { user, songs, currentUser } = this.props;

    const uploadPhotoButton = !user.photoUrl ?
      <button className="upload-photo"
        onClick={this.handleFileClick}>
        <FontAwesomeIcon icon="camera" />
        Upload image
        <input type="file"
          id="file"
          accept="image/*"
          onChange={this.handlePhotoFile} 
        />
      </button> 
    : <button className="upload-photo"
        onClick={this.handleFileClick}>
        <FontAwesomeIcon icon="camera" />
        Update image
        <input type="file"
          id="file"
          accept="image/*"
          onChange={this.handlePhotoFile} 
        />
      </button>;


    const songItems = songs.map((song, i) => {
      return (
        <div key={i} className="profile-song-item">
          <div className="profile-song-image">
            {song.photoUrl ? <img src={song.photoUrl} /> : null}
          </div>
          <div className="profile-song-main">
            <div className="profile-song-header">
              <PlayButtonContainer songId={song.id} />
              <div className="profile-song-info">
                <div className="profile-song-info-top">
                  <Link to={`/users/${user.id}`}>
                    <p className="profile-song-artist">
                      {user.display_name}
                    </p>
                  </Link>
                  <p>
                    {formatUploadTime(song.created_at)}
                  </p>
                </div>
                <div className="profile-song-info-bottom">
                  <Link to={`/songs/${song.id}`}>
                    <h3>
                      {song.title}
                    </h3>
                  </Link>
                  {song.genre ? <p># {song.genre}</p> : null}
                </div>
              </div>
            </div>
            <div className="waveform">
              {/* WAVEFORM HERE */}
            </div>
            <div className="profile-song-footer">
              <button>
                <FontAwesomeIcon icon="heart" />
                Like
              </button>
              {user === currentUser ? 
                <button className="share-button">
                  <FontAwesomeIcon icon="external-link-alt" />
                  Share
                </button> : 
                <button className="repost-button">
                  <FontAwesomeIcon icon="retweet" />
                  Repost
              </button>}
              {user === currentUser ? 
                <button>
                  <FontAwesomeIcon icon="pencil-alt" />
                  Edit
                </button> : 
                <button className="share-button">
                  <FontAwesomeIcon icon="external-link-alt" />
                  Share
                </button>}
              <button>
                <FontAwesomeIcon icon="ellipsis-h" />
                More
              </button>
            </div>
          </div>
        </div>
      );
    })

    return (
      <>
        <NavbarContainer />
        <div className="profile-page">
          <div className="profile-page-header">
            <div className="profile-header-photo">
              {user.photoUrl ? <img src={user.photoUrl} /> : null}
              {uploadPhotoButton}
            </div>
            <div className="profile-header-name">
              {user.display_name}
            </div>
          </div>
          <div className="profile-main">
            <div className="profile-main-header">
              <div className="profile-main-header-left">
                <a className="profile-main-header-all">
                  All
                </a>
                <a>
                  Popular tracks
                </a>
                <a>
                  Tracks
                </a>
                <a>
                  Albums
                </a>
                <a>
                  Playlists
                </a>
                <a>
                  Reposts
                </a>
              </div>
              <div className="profile-main-header-right">
                <button>
                  <FontAwesomeIcon icon="external-link-alt" />
                  Share
                </button>
                <button>
                  <FontAwesomeIcon icon="pencil-alt" />
                  Edit
                </button>
              </div>
            </div>
            <div className="profile-main-content">
              <div className="profile-main-songs">
                <h1>Recent</h1>
                {songItems}
              </div>
              <div className="profile-main-sidebar">
                <div className="profile-sidebar-content">
                  <div className="profile-user-stats">
                    <div className="profile-user-followers">
                      <p>Followers</p>
                      <h2>1</h2>
                    </div>
                    <div className="profile-user-following">
                      <p>Following</p>
                      <h2>0</h2>
                    </div>
                    <div className="profile-user-tracks">
                      <p>Tracks</p>
                      <h2>{songs.length}</h2>
                    </div>
                  </div>
                  <div className="profile-sidebar-bio">
                    Welcome to {user.display_name}'s page.
                    <br/>
                    User bio will be implemented here.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default ProfilePage;
