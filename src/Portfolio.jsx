import React, {Component} from 'react';
import './Portfolio.css';
import PortfolioData from './PortfolioData.js';

class Portfolio extends Component {
  render () {
    const portfolioItems = Object.keys(PortfolioData.projects).map(projectId => {
      const project = PortfolioData.projects[projectId];
      return <div>
        <a href={`project/${projectId}`}>
          <img className="PortfolioItem" src={project.imgSrc}/>
        </a>
      </div>
      });
    const midPointItems = portfolioItems.length/2;
    const portfolioDiv = (
      <div className="Portfolio">
        <div className="PortfolioColumn">
          {portfolioItems.slice(0,midPointItems)}
        </div>
        <div className="PortfolioVertDivider"></div>
        <div className="PortfolioColumn">
          {portfolioItems.slice(midPointItems)}
        </div>
      </div>
      );
    return portfolioDiv;
  }
}
export default Portfolio;
