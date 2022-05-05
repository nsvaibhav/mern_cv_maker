import React from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Auth from './components/Auth/Auth';

import LandingPage from './components/presentation/landingPage';
import GettingStarted from './components/presentation/gettingStarted';
import AboutUs from './components/presentation/aboutUs';
import Contacts from './components/presentation/contact';
import Education from './components/presentation/education';
import Finalize from  './components/presentation/finalizePage';


const App = () => {
  const user = JSON.parse(localStorage.getItem('profile'));

  return (
    <BrowserRouter>
      <Container maxWidth="xl">
        <Navbar />
        <Switch>
          <Route path="/" exact component={() => <Redirect to="/auth" />} />
          <Route path="/getting-started" exact component={GettingStarted}></Route>
          <Route path="/education" component={Education}></Route>  
          <Route path="/contact" component={Contacts}></Route>
          <Route path="/resume-templates" component={GettingStarted}></Route>
          <Route path="/about-us" component={AboutUs}></Route>
          <Route path="/finalize" component={Finalize}></Route>
          <Route path="/auth" exact component={() => (!user ? <Auth /> : <Redirect to="/resume-templates" />)} />
        </Switch>
      </Container>
    </BrowserRouter>
  );
};

export default App;
