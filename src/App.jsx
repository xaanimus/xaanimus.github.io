import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import React, { Component } from 'react';
import './App.css';
import AppData from './AppData';
import Header from './Header';
import Portfolio from './Portfolio';
import Skills from './Skills';
import Footer from './Footer';
import Main from './Main';
import ProjectDetail from './ProjectDetail';

/*
 * Include links to resume, github, linkedin, mail?, youtube, flickr, soundcloud
 * projects: snakeduo, dodgeblocks, swiftymathparse, exposure calc, rust ray tracer
 */

const redirectToAppStoreComponent = () => {
  window.location.href = AppData.appStoreLink;
  return <div></div>;
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route exact path="/" component={Main}/>
            <Route exact path="/project/:projectid" component={ProjectDetail}/>
            <Route exact path="/apps.html" component={redirectToAppStoreComponent}/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
