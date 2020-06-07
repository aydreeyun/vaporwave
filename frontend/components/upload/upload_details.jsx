import React from 'react';

class UploadDetails extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { currentStep, title, update, cancel, handleSubmit, handleFileClick } = this.props;
    const newTitle = title.split(".")[0]

    if (currentStep === 2) {
      return (
        <div className="upload-details-main">
          <div className="upload-details-header">
            <p>Basic info</p>
            <a>Metadata</a>
            <a>Permissions</a>
          </div>
          <div className="details-form">
            <div className="song-photo">
              {/* song photo upload - in progress */}
              <button onClick={handleFileClick}>
                <i className="fas fa-camera"></i>
                Upload image
                <input type="file" id="file" accept="image/*"/>
              </button>
              {/* song photo upload - in progress */}
            </div>
            <div className="song-details">
              <p>Title <span className="required">*</span></p>
              <input type="text" value={newTitle} onChange={update('title')} placeholder="Name your track" />
              <p>Genre</p>
              <div>
                <select onChange={update('genre')}>
                  <option value="">None</option>
                  <option value="Custom">Custom</option>
                  <option value="Alternative Rock">Alternative Rock</option>
                  <option value="Ambient">Ambient</option>
                  <option value="Classical">Classical</option>
                  <option value="Country">Country</option>
                  <option value="Dance & EDM">Dance & EDM</option>
                  <option value="Dancehall">Dancehall</option>
                  <option value="Deephall">Deephall</option>
                  <option value="Deep House">Deep House</option>
                  <option value="Disco">Disco</option>
                  <option value="Drum & Bass">Drum & Bass</option>
                  <option value="Dubstep">Dubstep</option>
                  <option value="Electronic">Electronic</option>
                  <option value="Folk & Singer-Songwriter">Folk & Singer-Songwriter</option>
                  <option value="Hip-hop & Rap">Hip-hop & Rap</option>
                  <option value="House">House</option>
                  <option value="Indie">Indie</option>
                  <option value="Jazz & Blues">Jazz & Blues</option>
                  <option value="Latin">Latin</option>
                  <option value="Metal">Metal</option>
                  <option value="Piano">Piano</option>
                  <option value="Pop">Pop</option>
                  <option value="R&B & Soul">R&B & Soul</option>
                  <option value="Reggae">Reggae</option>
                  <option value="Reggaeton">Reggaeton</option>
                  <option value="Rock">Rock</option>
                  <option value="Soundtrack">Soundtrack</option>
                  <option value="Techno">Techno</option>
                  <option value="Trance">Trance</option>
                  <option value="Trap">Trap</option>
                  <option value="Triphop">Triphop</option>
                  <option value="World">World</option>
                </select>
              </div>
              <p>Description</p>
              <textarea placeholder="Describe your track" onChange={update('description')}></textarea>
            </div>
          </div>
          <div className="upload-details-footer">
            <p>
              <span className="required">*</span> 
              Required fields
            </p>
            <div className="upload-details-buttons">
              <a onClick={cancel}>Cancel</a>
              <a className="save-button"
                onClick={handleSubmit}>
                  Save
              </a>
            </div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
};

export default UploadDetails;
