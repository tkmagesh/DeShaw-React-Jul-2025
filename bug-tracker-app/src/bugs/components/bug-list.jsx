import BugItem from "./bug-item";

const BugList = ({ bugs, toggle, remove, removeClosed }) => {
  return (
    <section>
      <ul>
        {bugs.map((bug) => (
          <BugItem key={bug.id} {...{ bug, toggle, remove }} />
        ))}
      </ul>
      <button onClick={() => removeClosed(bugs)}>Remove Closed</button>
    </section>
  );
};

export default BugList