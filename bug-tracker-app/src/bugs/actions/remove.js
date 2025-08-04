export function remove(bugToRemove) {
  return {
    type: "BUGS_REMOVE",
    payload: bugToRemove,
  };
}