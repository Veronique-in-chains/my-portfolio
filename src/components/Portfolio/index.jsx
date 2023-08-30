import React, { useRef, useState } from "react";
import PortfolioItem from "../PortfolioItem";
import { projects } from "../../projects";



const Portfolio = () => {

  
  return (
    <section id="portfolio" className="section portfolio">
        <h3>moje práce</h3>
        <div className="content portfolio">
          {projects.map((project) => {
            return (
            <PortfolioItem name={project.name} description={project.description} link={project.link} screenshot={project.screenshot} key={project.name} />
            )
          })}
        </div>
    </section>
  )
}

export default Portfolio;