import React from 'react';
import NavbarContainer from '../navbar/navbar_container';
import UploadFile from './upload_file';
import UploadDetails from './upload_details';
import UploadSuccess from './upload_success';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Upload extends React.Component {
  constructor(props) {
    super(props);

    const { currentUser } = this.props;

    this.state = {
      currentStep: 1,
      artistId: currentUser.id,
      title: "",
      genre: "",
      description: "",
      songFile: null,
    }

    this.handleFileClick = this.handleFileClick.bind(this);
    this.handleSongFile = this.handleSongFile.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.cancel = this.cancel.bind(this);

    this.titleError = "Enter a title."
  }

  componentDidMount() {
    scrollTo(0, 0);
  }

  handleFileClick() {
    document.getElementById("file").click();
  }

  handleSongFile(e) {
    e.preventDefault();
    const file = e.target.files[0];
    
    if (file && file.type === "audio/mpeg") {
      this.setState({
        currentStep: 2,
        title: file.name.split(".")[0],
        songFile: file,
      });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const { artistId, title, genre, description, songFile } = this.state;
    const formData = new FormData();

    formData.append('song[artist_id]', artistId);
    formData.append('song[title]', title);
    formData.append('song[genre]', genre);
    formData.append('song[description]', description);
    formData.append('song[song]', songFile);

    this.props.createSong(formData).then(song => { 
      this.setState({ 
        songId: song.song.id,
        currentStep: 3
      });
    });
  }

  update(field) {
    return e => this.setState({ [field]: e.target.value });
  }

  cancel() {
    this.setState({
      currentStep: 1,
      title: "",
      genre: "",
      description: "",
      songFile: null,
      songUrl: "",
    });
  }

  render() {
    return (
      <>
        <NavbarContainer />
        <div className="upload-page">
          <div className="upload-file-header">
            <div className="upload-header-left">
              <p>Upload</p>
              <a>Your tracks</a>
              <a>Stats</a>
              <a>Pro Plans</a>
              <a>Pulse</a>
            </div>
            <a>
            <FontAwesomeIcon icon="external-link-alt" />
              Creators on VaporWave
            </a>
          </div>
          {/* <UploadFile 
            currentStep={this.state.currentStep}
            handleSongFile={this.handleSongFile}
            handleFileClick={this.handleFileClick}
          /> */}
          <UploadDetails 
            currentStep={this.state.currentStep}
            title={this.state.title}
            update={this.update}
            cancel={this.cancel}
            handleSubmit={this.handleSubmit}
            handleFileClick={this.handleFileClick}
          />
          <UploadSuccess
            currentStep={this.state.currentStep}
            songId={this.state.songId}
            artist={this.props.currentUser.display_name}
            title={this.state.title}
            description={this.state.description}
          />
        </div>
      </>
    );
  }
};

export default Upload;
