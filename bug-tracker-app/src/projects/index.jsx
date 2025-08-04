import useProjects from "./hooks/useProjects"

export default function Projects(){
    const projects = useProjects()
    return (
        <div>
            <h3>Projects</h3>
            <ul>
                {projects.map(project  => (<li key={project.id}>{project.name} - [{project.bugsCount}] </li>))}
            </ul>
        </div>
    )
}