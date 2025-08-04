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
  const bugs = useSelector(storeState => storeState);

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
      <BugStats count={bugs.length} closedCount={closedCount} />
      <BugEditor onBugAdded={createNew} />
      <BugList {...{ bugs, toggle, remove, removeClosed }} />
    </div>
  );
}

export default Bugs; 