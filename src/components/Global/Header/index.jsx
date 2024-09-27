import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { StyledHeader, ButtonMenu } from './styles';
import { Container } from '../../../styles/container';

import logo from '../../../assets/logo.svg';

export const Header = () => {

    const [menuActive, setMenuActive] = useState(false);

    const handleMenuToggle = () => {
        setMenuActive(!menuActive);
    };

    const handleLinkClick = () => {
        setMenuActive(false);
    };

    return (
        <StyledHeader>
            <Container>
                <nav>

                    <Link to="/">
                        <img src={logo} alt="Logo" />
                    </Link>

                    <ul className={menuActive ? 'active' : ''}>
                        <li><NavLink to="/" activeClassName="active" onClick={handleLinkClick}>Inicio</NavLink></li>
                        <li><NavLink to="/about" activeClassName="active" onClick={handleLinkClick}>Sobre</NavLink></li>
                        <li><NavLink to="/skills" activeClassName="active" onClick={handleLinkClick}>Skills</NavLink></li>
                        <li><NavLink to="/projects" activeClassName="active" onClick={handleLinkClick}>Projetos</NavLink></li>
                        <li><NavLink to="/contact" activeClassName="active" onClick={handleLinkClick}>Contato</NavLink></li>
                    </ul>

                    <ButtonMenu className="button-menu" onClick={handleMenuToggle} active={menuActive ? true : undefined}>
                        <div></div>
                        <div></div>
                        <div></div>
                    </ButtonMenu>
                </nav>
            </Container>
        </StyledHeader>
    );
}

