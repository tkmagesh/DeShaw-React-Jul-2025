import BugStats from "./components/bug-stats";
import BugEditor from "./components/bug-editor";
import BugList from "./components/bug-list";
import './index.css';
import {useDispatch} from 'react-redux';
import { bindActionCreators } from "redux";
import * as bugActionCreators from "./actions";
import useBugs from "./hooks/useBugs";
import useBugActionDispatchers from "./hooks/useBugActionDispatchers";

// Container component
function Bugs() {

  const {bugs, projects, closedCount} = useBugs();
  const { createNew, toggle, remove, removeClosed } = useBugActionDispatchers()
  
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