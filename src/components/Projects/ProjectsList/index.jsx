import { List } from './styles';
import { ProjectCard } from '../ProjectCard';
import { projects } from '../../../data/projects';

export const ProjectsList = () => {
    return (
        <List>
            {projects.map(project => (
                <ProjectCard key={project.id} project={project} />
            ))}
        </List>
    );
};