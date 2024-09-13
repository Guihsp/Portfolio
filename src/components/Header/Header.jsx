import { Link } from 'react-router-dom';
import { StyledHeader } from './Header.styles';
import { Container } from '../Container/Container.styles';

import logo from '../../assets/logo.svg';

export const Header = () => {
return (
        <StyledHeader>
            <Container>
                <nav>
                    <h1>
                        <Link to="/">
                            <img src={logo} alt="Logo" />
                        </Link>
                    </h1>

                    <ul>
                        <li><Link to="/">Inicio</Link></li>
                        <li><Link to="/about">Sobre</Link></li>
                        <li><Link to="/skills">Skills</Link></li>
                        <li><Link to="/projects">Projetos</Link></li>
                        <li><Link to="/contact">Contato</Link></li>
                    </ul>
                </nav>
            </Container>
        </StyledHeader>
    );
}

