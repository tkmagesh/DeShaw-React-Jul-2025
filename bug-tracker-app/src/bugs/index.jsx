import BugStats from "./components/bug-stats";
import BugEditor from "./components/bug-editor";
import BugList from "./components/bug-list";
import './index.css';
import {useSelector, useDispatch} from 'react-redux';
import { bindActionCreators } from "redux";
import * as bugActionCreators from "./actions";

// Container component
function Bugs() {

  
  // extract state from the store
  const {bugs, projects} = useSelector(({bugs, projects}) => {
    return {
      projects : projects,
      bugs : bugs.map(bug => {
        return {
          ...bug,
          projectName : projects.find(p => p.id === bug.projectId).name
        }
      })
    }
  });
  
  // create action dispatchers
  const {createNew, toggle, remove, removeClosed} = bindActionCreators(
    bugActionCreators,
    useDispatch()
  );
  const closedCount = bugs.reduce(
    (cnt, bug) => (bug.isClosed ? cnt + 1 : cnt),
    0
  );
  return (
    <div>
      <h3>Bugs</h3>
      <div>
        <BugStats count={bugs.length} closedCount={closedCount} />
        <BugEditor onBugAdded={createNew} projects={projects} />
        <BugList {...{ bugs, toggle, remove, removeClosed }} />
      </div>
    </div>
  );
}

export default Bugs; 