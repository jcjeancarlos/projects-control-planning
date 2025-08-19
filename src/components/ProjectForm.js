import { useState } from "react";

function ProjectForm({ onAddProject }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [budget, setBudget] = useState(""); 

    const handleSubmit = (e) => {
    e.preventDefault();
    
    const newProject = {
      id: Date.now(),
      title,
      description,
      budget
    };

    onAddProject(newProject);
    setTitle("");
    setDescription("");
    setBudget("");
  };

    return (
    <form onSubmit={handleSubmit}>
      <input className="ProjectName"
        type="text"
        placeholder="Project title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea className="ProjectDescription"
        placeholder="Project description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <input className="Budget"
        type="number"
        placeholder="Project budget (€)"
        value={budget}
        onChange={(e) => setBudget(e.target.value)}
        required
      />
      <button className="Button" type="submit">Add Project</button>
    </form>
  );
}

export default ProjectForm;
