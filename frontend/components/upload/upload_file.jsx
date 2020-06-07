import React from 'react';

class UploadFile extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { currentStep, handleFile, handleFileClick } = this.props
    if (currentStep === 1) {
      return (
        <div className="upload-file-form">
          <div className="upload-file-header">
            <div className="upload-header-left">
              <p>Upload</p>
              <a>Your tracks</a>
              <a>Stats</a>
              <a>Pro Plans</a>
              <a>Pulse</a>
            </div>
            <a>
              <i className="fas fa-external-link-alt"></i>
              Creators on VaporWave
            </a>
          </div>

          <div className="upload-main">
            <div className="upload-main-content">              
              <h2>Drag and drop your tracks & albums here</h2>
              <button onClick={handleFileClick}>
                or choose files to upload
                <input type="file" id="file" onChange={handleFile} accept="audio/mpeg"/>
              </button>
            </div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
};

export default UploadFile;
