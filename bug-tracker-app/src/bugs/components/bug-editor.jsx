import { useState } from "react";

const BugEditor = ({ onBugAdded }) => {
  // to hold the new bug name entered by the user
  const [newBugName, setNewBugName] = useState("");

  return (
    <section>
      <label htmlFor="">Bug Name :</label>
      <input type="text" onChange={(e) => setNewBugName(e.target.value)} />
      <button onClick={() => onBugAdded(newBugName)}>Add</button>
    </section>
  );
};

export default BugEditor