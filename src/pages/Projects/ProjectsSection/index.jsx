import { Container } from '../../../components/Global/Container';
import { ProjectsList } from '../../../components/Projects/ProjectsList';
import { Intro, Projects } from './styles';

export const ProjectsSection = () => {

    return (
        <Container>
            <Intro>
                <h1>Meus projetos</h1>
               
            </Intro>

            <Projects>
                <ProjectsList />
            </Projects>

        </Container>
    );
}