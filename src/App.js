import React from 'react';
import {withRouter, Route, Switch} from 'react-router-dom'

import Nav from './Components/Nav'
import Home from './Components/home'
import Contact from './Components/Contact'
import Footer from './Components/Footer';
import Blog from './Components/Blog'

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <Nav />

      <div className="wrapper">
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/contact' component={Contact}/>
          <Route exact path='/articles' component={Blog}/>
        </Switch>
      </div>

      <Footer />
    </div>
  );
}

export default withRouter(App);
