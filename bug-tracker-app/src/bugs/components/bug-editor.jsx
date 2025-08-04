import { useState } from "react";

const BugEditor = ({ onBugAdded, projects }) => {
  // to hold the new bug name entered by the user
  const [newBugName, setNewBugName] = useState("");
  const [selectedProjectId, setSelectedProjectId] = useState(0)
  return (
    <section>
      <label htmlFor="">Bug Name :</label>
      <input type="text" onChange={(e) => setNewBugName(e.target.value)} />
      <label htmlFor="">Project :</label>
      <select onChange={(e) => setSelectedProjectId(e.target.value)}>
        <option>---- Select ----</option>
        {projects.map(project => <option key={project.id} value={project.id}>{project.name}</option>)}
      </select>
      <button onClick={() => onBugAdded(newBugName, parseInt(selectedProjectId))}>
        Add
      </button>
    </section>
  );
};

export default BugEditor