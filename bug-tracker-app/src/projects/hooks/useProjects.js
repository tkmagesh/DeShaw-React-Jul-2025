import { useSelector } from "react-redux";
export default function useProjects(){
    const projects = useSelector(({ bugs, projects }) => {
      return projects.map((project) => ({
        ...project,
        bugsCount: bugs.reduce(
          (prevCount, bug) =>
            bug.projectId === project.id ? prevCount + 1 : prevCount,
          0
        ),
      }));
    });
    return projects;
}