import { useSelector } from "react-redux";
export default function useBugs(){
  // extract state from the store
  const { bugs, projects } = useSelector(({ bugs, projects }) => {
    return {
      projects: projects,
      bugs: bugs.map((bug) => {
        return {
          ...bug,
          projectName: projects.find((p) => p.id === bug.projectId).name,
        };
      }),
    };
  });
  const closedCount = bugs.reduce(
    (cnt, bug) => (bug.isClosed ? cnt + 1 : cnt),
    0
  );
  return {bugs, projects, closedCount}
}