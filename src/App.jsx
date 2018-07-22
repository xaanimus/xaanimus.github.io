//@flow
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
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

function mkPath(path: string): string {
  return path;
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Switch>
            <Route exact path={mkPath("/")} component={Main}/>
            <Route exact path={mkPath("/project/:projectid")} component={ProjectDetail}/>
            <Route exact path={mkPath("/apps.html")} component={redirectToAppStoreComponent}/>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
