import React from 'react';
import {withRouter, Route, Switch} from 'react-router-dom'

import Nav from './Components/Nav'
import Home from './Components/home'
import Contact from './Components/Contact'

import './App.css';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">

      </header>
      <Nav/>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/contact' component={Contact}/>
      </Switch>
      <Footer/>
    </div>
  );
}

export default withRouter(App);
