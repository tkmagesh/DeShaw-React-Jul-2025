export function removeClosed(bugs /* to be removed */) {
  const bugsToRetain = bugs.filter((bug) => !bug.isClosed);
  return {
    type: "BUGS_LOAD",
    payload: bugsToRetain,
  };
}