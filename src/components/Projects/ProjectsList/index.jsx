import { useEffect, useState } from 'react';
import { List } from './styles';
import { ProjectCard } from '../ProjectCard';
import { Loader } from '../../Global/Loader';
import { getProjects } from '../../../services/api/projects';

export const ProjectsList = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        getProjects()
            .then(projects => setProjects(projects))
            .catch(error => console.error(error));
    }, []);

    if(projects.length === 0) {
        return <Loader />;
    }

    return (
        <List>
            {projects.map(project => (
                <ProjectCard key={project._id} project={project} />
            ))}
        </List>
    );
};