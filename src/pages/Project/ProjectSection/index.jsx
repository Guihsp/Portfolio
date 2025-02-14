import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container } from '../../../components/Global/Container';
import { Button } from '../../../components/Button';
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
        return <p>Carregando...</p>;
    }

    return (
        <Container>
            <ProjectDetails>
                <div>
                    <div>
                        <h1>{project.name}</h1>
                        <p>{project.date}</p>
                    </div>
                    <h2>{project.title}</h2>
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
                                Para ver mais sobre o projeto acesse os links abaixo:
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