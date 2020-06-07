import React from 'react';
import { Link } from 'react-router-dom';

class UploadSuccess extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { currentStep, songId, artist, title, description } = this.props;

    if (currentStep === 3) {
      return (
        <div className="upload-success">
          <div className="success-song-photo">
            {/* SONG PHOTO HERE */}
          </div>
          <div className="success-song-details">
            <p className="success-song-artist">{artist}</p>
            <h3 className="success-song-title">{title}</h3>
            <p className="success-song-desc">{description}</p>
            <p className="success-song-complete">Upload complete.</p>
            <Link className="success-song-link"
            to={`/songs/${songId}`}>
              Go to your track.
            </Link>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
};

export default UploadSuccess;
