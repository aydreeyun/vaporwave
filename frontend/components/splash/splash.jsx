import React from 'react';
import { Link, Redirect } from 'react-router-dom';

class Splash extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.user) {
      return (
        <>
          <p>Welcome {this.props.user.display_name}</p>
          <button onClick={this.props.logout}>Log Out</button>
        </>
      );
    } else {
      return (
        <>
          <Link to="/">
            <h1>VaporWave</h1>
          </Link>

          <div className="splash-banner">
            <button className="splash-login" onClick={() => this.props.openModal("login")}>Sign In</button>
            <br/>
            <button className="splash-signup" onClick={() => this.props.openModal("signup")}>Create account</button>

            <h2 className="splash-header">Discover more with VaporWave Go+</h2>
            <p className="splash-header-p">VaporWave Go+ lets you listen offline, ad-free, with over 150 million tracks - and growing.</p>
            <button className="large-button-transparent">Learn More</button>
            <button className="large-button-orange">Try it free for 30 days</button>
          </div>

          <div className="splash-search">
            <input className="splash-search-input" type="text" placeholder="Search for artists, bands, tracks, podcasts"/>
            <button></button>
            or
            <button className="splash-button-orange">Upload your own</button>
          </div>

          <div className="splash-tracks">
            <h3>Hear what's trending for free in the VaporWave community</h3>
            <button className="splash-button-orange">Explore trending playlists</button>
          </div>

          <div className="splash-mobile">
            <h1>Never stop listening</h1>
            <h3>VaporWave is available on Web, iOS, Android, Sonos, Chromecast, and Xbox One.</h3>
          </div>

          <div className="splash-creators">
            <h1 className="splash-header">Calling all creators</h1>
            <h3>Get on SoundCloud to connect with fans, share your sounds, and grow your audience. What are you waiting for?</h3>
            <button>Find out more</button>
          </div>

          <div className="splash-footer">
            <h1>Thanks for listening. Now join in.</h1>
            <h3>Save tracks, follow artists and build playlists. All for free</h3>
            <button className="splash-signup" onClick={() => this.props.openModal("signup")}>Create account</button>
            Already have an account? <button className="splash-login" onClick={() => this.props.openModal("login")}>Sign In</button>
          </div>
        </>
      );
    }
  }
};

export default Splash;
