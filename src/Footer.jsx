import './Footer.css';
import React, { Component } from 'react';
import resumeAsset from './assets/resume3.pdf';
import AppData from './AppData';

class Footer extends Component {
  render() {
    const footerItems = [
      {title: "Résumé", link:resumeAsset},
      {title: "App Store", link:AppData.appStoreLink},
      {title: "Github", link:AppData.githubLink},
    ];

    const separatorItem = <div className="FooterSeparator"><p className="FooterText">•</p></div>;

    const footerElems =
      footerItems.map((item) => 
        <div>
          <a href={item.link}>
            <p className="FooterText">
              {item.title}
            </p>
          </a>
        </div>
        )
        .reduce((acc, item) => acc.concat( acc.length == 0 ? [item] : [separatorItem, item]),
          []);

    return (
      <div className="Footer">
        {footerElems}
      </div>
      );
  }
}

// résumé • app store • github

export default Footer;
