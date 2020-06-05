import React from 'react';
import { Link } from 'react-router-dom';

class UploadSuccess extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { currentStep, songId } = this.props;

    if (currentStep === 3) {
      return (
        <div>
          <Link to={`/songs/${songId}`}>Check your song out</Link>
        </div>
      );
    } else {
      return null;
    }
  }
};

export default UploadSuccess;
