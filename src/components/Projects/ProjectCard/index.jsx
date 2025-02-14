import { Link } from 'react-router-dom';
import { Card } from './styles';

export const ProjectCard = ({ project }) => {
    return (
        <Card>
            <Link to={`/projects/${project._id}`}>
                <img src={project.image} alt={project.title} />
            </Link>

            <Link to={`/projects/${project._id}`}>
                <div>
                    <p>{project.name}</p>
                    <p>{project.date}</p>
                </div>
                <h2>{project.title}</h2>
            </Link>
        </Card>
    );
};