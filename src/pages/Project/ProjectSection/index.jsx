import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container } from '../../../components/Global/Container';
import { Button } from '../../../components/Button';
import { Loader } from '../../../components/Global/Loader';
import { ProjectDetails } from './styles';
import { getProject } from '../../../services/api/projects';

export const Project = () => {
    const { id } = useParams();
    const [project, setProject] = useState(null);

    useEffect(() => {
        getProject(id)
            .then(project => setProject(project))
            .catch(error => console.error("Erro ao buscar projeto:", error));
    }, [id]);

    if (!project) {
        return <Loader />;
    }

    return (
        <Container>
            <ProjectDetails>
                <div>
                    <h1>{project.name}</h1>
                    <h2>{project.title}</h2>
                    <p>{project.date}</p>
                </div>

                <div>
                    <iframe
                        src={`https://www.youtube.com/embed/${project.videoId}`}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>

                    <p dangerouslySetInnerHTML={{ __html: project.description }}></p>

                    <div>
                        <div>
                            <p>
                                Se interessou pelo projeto? Acesse o link abaixo para ver mais detalhes.                                
                            </p>
                            {project.linkDeploy && (
                                <Button to={project.linkDeploy} external primary>
                                    Acessar projeto
                                </Button>
                            )}
                            <Button to={project.linkRepository} external>
                                Ver código fonte
                            </Button>
                        </div>
                    </div>
                </div>
            </ProjectDetails>
        </Container>
    );
};