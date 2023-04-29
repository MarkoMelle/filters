import React from "react";
import '../styles/ProjectList.css'

export default function ProjectList(props) {
   return (
      <ul className="projects-list">
         {props.projects.map((project, index) => (
            <li className="project-card" key={index}>
               <img  className="project-card__img"
                  src={project.img}
                  alt={project.category}
               /></li>
         ))}
      </ul>
   );
}