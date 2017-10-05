import React, { Component } from 'react';
import Header from './Header';
import Portfolio from './Portfolio';
import Skills from './Skills';
import Footer from './Footer';

/*
 * Include links to resume, github, linkedin, mail?, youtube, flickr, soundcloud
 * projects: snakeduo, dodgeblocks, swiftymathparse, exposure calc, rust ray tracer
 */

class Main extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Portfolio/>
        <Skills/>
        <Footer/>
      </div>
    );
  }
}

export default Main;
