// temporary - to be removed
let _currentBugId = 0;

export function createNew(newBugName, projectId) {
  const newBug = {
    id: ++_currentBugId,
    name: newBugName,
    isClosed: false,
    createdAt: new Date(),
    projectId : projectId
  };
  return {
    type: "BUGS_ADD",
    payload: newBug,
  };
}
