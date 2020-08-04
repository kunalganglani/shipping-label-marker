import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './features/authentication/home';
import Header from './core/header';
import Login from './features/authentication/login';
import SignUp from './features/authentication/signup';
import { AuthProvider } from './features/authentication/Auth';
import PrivateRoute from './features/authentication/privateroute';

const App = () => (
  <>
    <Header headingTitle="Shipping Label Marker App" />
    <AuthProvider>
      <Router>
        <div>
          <PrivateRoute exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
        </div>
      </Router>
    </AuthProvider>
  </>

);

export default App;
