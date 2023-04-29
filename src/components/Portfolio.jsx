import React, { useState } from "react";
import Toolbar from "./Toolbar";
import ProjectList from "./ProjectList";
import projects from "../data/projects";

// Компонент для отображения портфолио
export default function Portfolio() {

   // Toolbar props
   const [selected, setSelected] = useState("All");
   const filters = ["All", "Websites", "Flayers", "Business Cards"];
   const onSelectFilter = (filter) => {
      setSelected(filter);
   };

   // ProjectList props
   const filteredProjects = projects.filter((project) => {
      return selected === "All" || project.category === selected;
   });
  
   return (
      <>
         <Toolbar
            filters={filters}
            selected= {selected}
            onSelectFilter={onSelectFilter}
         />
         <ProjectList projects={filteredProjects}/>
      </>
   );
}