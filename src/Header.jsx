import React, {Component} from 'react';
import './Header.css';
import gh_logo from './assets/github-icon.png';
import AppData from './AppData';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <p className="name">Serge-Olivier Amega</p>
        <div className="links">
          <a href={AppData.githubLink}>
            <div className="logo-link">
              <img src={gh_logo} alt="gh_link"/>
            </div>
          </a>
        </div>
      </div>
    );
  }
}
export default Header;
