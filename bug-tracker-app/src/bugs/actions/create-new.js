// temporary - to be removed
let _currentBugId = 0;

export function createNew(newBugName) {
  const newBug = {
    id: ++_currentBugId,
    name: newBugName,
    isClosed: false,
    createdAt: new Date(),
  };
  return {
    type: "BUGS_ADD",
    payload: newBug,
  };
}
