import React from 'react';
import NavbarContainer from '../navbar/navbar_container';

class ProfilePage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    scrollTo(0, 0);
  }

  render() {
    return (
      <>
        <NavbarContainer />
        <div className="profile-page">

        </div>
      </>
    );
  }
};

export default ProfilePage;
