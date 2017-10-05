import React, { Component } from 'react';
import './ProjectDetail.css';
import PortfolioData from './PortfolioData.js';

const ProjectDetail = ({match}) =>
{
  const projectid = match.params.projectid;
  const project = PortfolioData.projects[projectid];
  if (project == undefined) {
    console.log("not found");
    return <div></div>; //TODO return 404
  }

  return (
    <div className={"ProjectDetail"}>
      <p className={"ProjectTitle"}>{project.title}</p>
      <img src={project.imgSrc}/>
      <p className={"ProjectDescription"}>{project.description}</p>
    </div>
  );
};

export default ProjectDetail;
