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
              <input type="file"
                className="drag-file"
                onClick={e => e.preventDefault()}
                onChange={handleSongFile}
                accept="audio/mpeg"
                title=""/>
              <h2>Drag and drop your tracks & albums here</h2>
              <button onClick={handleFileClick}>
                or choose files to upload
                <input type="file"
                  id="file"
                  onClick={e => e.stopPropagation()}
                  onChange={handleSongFile}
                  accept="audio/mpeg"
                  title=""/>
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
