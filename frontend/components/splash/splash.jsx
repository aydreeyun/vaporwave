import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Splash extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    scrollTo(0, 0);
  }

  render() {
    return (
      <div className="splash">
        <div className="splash-top-line"></div>
        <div className="splash-banner">
          <div className="splash-banner-navbar">
            <div className="splash-banner-left">
              <img src={window.logo} alt="VaporWave"/>
            </div>

            <div className="splash-banner-right">
            <button className="splash-login" onClick={() => this.props.openModal("login")}>Sign in</button>
            <br/>
            <button className="splash-signup" onClick={() => this.props.openModal("signup")}>Create account</button>
            <a onClick={() => this.props.openModal("signup")}
              className="for-creators">
                For Creators
            </a>
            </div>
          </div>

          <div className="splash-banner-center">
            <h2 className="splash-header">Discover more with VaporWave Go+</h2>
            <p className="splash-header-p">VaporWave Go+ lets you listen offline, ad-free, with over 150 million tracks ‒ and growing.</p>
            <a href="https://www.linkedin.com/in/adriantaehyunkim/" 
              className="large-button-transparent">
                Meet the creator
            </a>
            <button className="large-button-orange"
              onClick={() => this.props.openModal("signup")}>
                Try it free
            </button>
          </div>
          
        </div>

        <div className="splash-search">
          <input className="splash-search-input" type="text" placeholder="Search for artists, bands, tracks, podcasts"/>
          <button>
            <FontAwesomeIcon icon="search" />
          </button>
          <p>or</p>
          <button className="splash-search-button">Upload your own</button>
        </div>

        <div className="splash-tracks">
          <h3>Hear what's trending for free in the VaporWave community</h3>
          <div className="tracks"></div>
          {/* Link to discover page once protected auth removed */}
          <Link className="splash-button-orange">Explore trending playlists</Link>
        </div>

        <div className="splash-mobile">
          <div className="mobile-img"></div>
          <div className="mobile-text">
            <h1>Never stop listening</h1>
            <div className="mobile-border"></div>
            <h3>VaporWave is available on only the browser because I haven't learned how to make phone apps.</h3>
          </div>
        </div>

        <div className="splash-creators">
          <div className="splash-creators-text">
            <h1 className="splash-header">Calling all creators</h1>
            <h3>Get on VaporWave to connect with fans, share your sounds, and grow your audience. What are you waiting for?</h3>
            <button onClick={() => this.props.openModal("signup")}>
              Get started
            </button>
          </div>
        </div>

        <div className="splash-endpage">
          <h1>Thanks for listening. Now join in.</h1>
          <h3>Save tracks, follow artists and build playlists. All for free.</h3>
          <button className="splash-signup" onClick={() => this.props.openModal("signup")}>Create account</button>
          <div className="splash-endpage-login">
            <p>Already have an account?</p>
            <button className="splash-login" onClick={() => this.props.openModal("login")}>Sign in</button>
          </div>
        </div>

        <div className="splash-footer">
          <a href="https://www.linkedin.com/in/adriantaehyunkim/">
            GitHub
          </a>
          <p>-</p>
          <a href="https://github.com/aydreeyun/vaporwave">
            Linkedin
          </a>
          <p>-</p>
          <a>
            AngelList
          </a>
        </div>
      </div>
    );
  }
};

export default Splash;
