import { Link } from 'react-router-dom';
import { Card } from './styles';
import { Button } from '../../Button';

export const ProjectCard = ({ project }) => {
    const projectName = project.name.toLowerCase().replace(/\s+/g, '-');

    return (
        <Card>
            <Link to={`/projects/${projectName}`}>
                <img src={project.image} alt={project.title} />
            </Link>

            <Link to={`/projects/${projectName}`}>
                    <div>
                        <p>{project.name}</p>
                        <p>{project.date}</p>
                    </div>
                    <h2>{project.title}</h2>

                    <Button to={`/projects/${projectName}`} >
                        Ver projeto
                    </Button>
            </Link> 
        </Card>
    );
};