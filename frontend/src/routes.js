import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Logon from './pages/Logon';
import RegisterDoctor from './pages/RegisterDoctor';
import RegisterPacient from './pages/RegisterPacient';
import Select from './pages/Select';
import ProfileDoctor from './pages/ProfileDoctor';
import ProfilePacient from './pages/ProfilePacient';
import NewPacient from './pages/NewPacient';
import NewQuery from './pages/NewQuery';
import Video from './pages/VideoChat';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Logon} exact />
        <Route path="/select" component={Select} />
        <Route path="/registerdoctor" component={RegisterDoctor} />
        <Route path="/registerpacient" component={RegisterPacient} />
        <Route path="/profiledoctor" component={ProfileDoctor} />
        <Route path="/profilepacient" component={ProfilePacient} />
        <Route path="/pacients/new" component={NewPacient} />
        <Route path="/query/new" component={NewQuery} />
        <Route path="/video" component={Video} />
      </Switch>
    </BrowserRouter>
  );
}
