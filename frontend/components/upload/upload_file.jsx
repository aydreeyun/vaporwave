import React from 'react';

class UploadFile extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { currentStep, handleFile, handleFileClick } = this.props
    if (currentStep === 1) {
      return (
        <div className="upload-form">
          <button onClick={handleFileClick}>
            Choose files to upload
            <input type="file" id="file" onChange={handleFile} accept="audio/mpeg"/>
          </button>
        </div>
      );
    } else {
      return null;
    }
  }
};

export default UploadFile;
