import { useState } from "react";
import ProjectForm from "./ProjectForm";
import Projectlist from "./ProjectList" ;

function Project() {
  const [projects, setProjects] = useState([]);

  const handleAddProject = (project) => {
    setProjects([...projects, project]);
  };

  return (  
    <div className='Project'>
      <h1>Project planning</h1>
      < ProjectForm onAddProject={handleAddProject} />
      < Projectlist projects={projects} />
    </div>
  )
}

export default Project;
