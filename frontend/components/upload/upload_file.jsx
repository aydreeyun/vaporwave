import React from 'react';

class UploadFile extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { currentStep, handleSongFile, handleFileClick } = this.props
    if (currentStep === 1) {
      return (
        <div className="upload-file-form">
          <div className="upload-main">
            <div className="upload-main-content">              
              <h2>Drag and drop your tracks & albums here</h2>
              <button onClick={handleFileClick}>
                or choose files to upload
                <input type="file"
                  id="file"
                  onChange={handleSongFile}
                  accept="audio/mpeg"/>
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
