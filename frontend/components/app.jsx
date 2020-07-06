import React from 'react';
import SplashContainer from './splash/splash_container';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import ModalContainer from './modal/modal_container';
import DiscoverContainer from './discover/discover_container';
import SongShowContainer from './songs/song_show_container';
import UploadContainer from './upload/upload_container';
import ProfilePageContainer from './users/profile_page_container';
import MusicPlayerContainer from './music_player/music_player_container';
import CommentsContainer from './comments/comments_container';

const App = () => {
  return (
    <>
      <ModalContainer />
      
      <Switch>
        <AuthRoute exact path="/" component={SplashContainer} />
        <ProtectedRoute exact path="/discover" component={DiscoverContainer} />
        <ProtectedRoute exact path="/upload" component={UploadContainer} />
        <ProtectedRoute exact path="/songs/:songId" component={SongShowContainer}/>
        <ProtectedRoute exact path="/users/:userId" component={ProfilePageContainer} />
        <ProtectedRoute exact path="/users/:userId/comments" component={CommentsContainer} />
      </Switch>

      <MusicPlayerContainer />
    </>
  );
};

export default App;