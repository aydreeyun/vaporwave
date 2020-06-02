import React from 'react';
import SplashContainer from './splash/splash_container';
import { Link, Route, Switch } from 'react-router-dom';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import ModalContainer from './modal/modal_container';

const App = () => {
  return (
    <>
      <ModalContainer />
      <header>
        <Link to="/">
          <h1>VaporWave</h1>
        </Link>
        
        <SplashContainer />
      </header>
      
      {/* <Switch>
        <AuthRoute path="/login" component={LoginFormContainer} />
        <AuthRoute path="/signup" component={SignupFormContainer} />
      </Switch> */}
    </>
  );
};

export default App;