import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Logon from './pages/Logon';
import Registerdoctor from './pages/Registerdoctor'
import RegisterPacient from './pages/RegisterPacient';
import Select from './pages/Select'
import ProfileDoctor from './pages/Profile'; 
import ProfilePacient from './pages/ProfilePacient';
import NewPacient from './pages/NewPacient';
import NewQuery from './pages/NewQuery';
import Video from './pages/VideoChat';

export default function Routes(){
  return(
    <BrowserRouter>
    <Switch>
      <Route path="/" component={Logon} exact></Route>
      <Route path="/select" component={Select}></Route>
      <Route path="/registerdoctor" component={Registerdoctor}></Route>
      <Route path="/registerpacient" component={RegisterPacient}></Route>
      <Route path="/profiledoctor" component={ProfileDoctor}/>
      <Route path="/profilepacient" component={ProfilePacient}/>
      <Route path="/pacients/new" component={NewPacient}/>
      <Route path="/query/new" component={NewQuery}/>
      <Route path="/video" component={Video}/>
    </Switch>
    </BrowserRouter>
  );
}