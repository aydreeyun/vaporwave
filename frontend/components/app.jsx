import React from 'react';
import SplashContainer from './splash/splash_container';
import { Link, Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import ModalContainer from './modal/modal_container';
import DiscoverContainer from './discover/discover_container';


const App = () => {
  return (
    <>
      <ModalContainer />
      
      <Switch>
        <AuthRoute exact path="/" component={SplashContainer} />
        <ProtectedRoute path="/discover" component={DiscoverContainer} />
      </Switch>
    </>
  );
};

export default App;