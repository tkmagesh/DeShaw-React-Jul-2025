export function toggle(bugToToggle) {
  const toggledBug = { ...bugToToggle, isClosed: !bugToToggle.isClosed };
  return {
    type: "BUGS_UPDATE",
    payload: toggledBug,
  };
}