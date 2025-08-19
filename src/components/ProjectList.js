
function ProjectList({ projects }) {
  return (
    <div className="ProjectList">
      <h2>Project List</h2>
      {projects.length === 0 ? (
        <p>No projects yet.</p>
      ) : (
        <ul>
          {projects.map((project) => (
            <li key={project.id}>
              <button className="OpenProject" type="button"> <strong>{project.title}</strong>: {project.description} <br /> 
              <em>Budget:</em> €{project.budget}</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ProjectList;
