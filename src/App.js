import React from 'react';
import {withRouter, Route, Switch} from 'react-router-dom'

import Nav from './Components/Nav'
import Home from './Components/home'
// import Projects from './Compoents/projects'



import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">

      </header>
      <Nav/>
      <Switch>
        <Route path='/' component={Home} />
        
      </Switch>

    </div>
  );
}

export default withRouter(App);
