import { useSelector } from "react-redux"

export default function Projects(){
    const projects = useSelector(storeState => storeState.projects)
    return (
        <div>
            <h3>Projects</h3>
            <ul>
                {projects.map(project  => (<li key={project.id}>{project.name}</li>))}
            </ul>
        </div>
    )
}