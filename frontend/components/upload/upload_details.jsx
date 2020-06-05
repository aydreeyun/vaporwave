import React from 'react';

class UploadDetails extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { currentStep, title, update, cancel, handleSubmit } = this.props;
    if (currentStep === 2) {
      return (
        <div>
          <p>Title <span className="required">*</span></p>
          <input type="text" value={title} onChange={update('title')} placeholder="Name your track" />
          <p>Genre</p>
          <select onChange={update('genre')}>
            <option value="">None</option>
            <option value="EDM">EDM</option>
            <option value="Rap">Rap</option>
            <option value="Rock">Rock</option>
          </select>
          <p>Description</p>
          <textarea placeholder="Describe your track" onChange={update('description')}></textarea>
          <a onClick={cancel}>Cancel</a>
          <a onClick={handleSubmit}>Save</a>
        </div>
      );
    } else {
      return null;
    }
  }
};

export default UploadDetails;
