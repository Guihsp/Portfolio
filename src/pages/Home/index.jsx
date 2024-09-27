import { Link } from "react-router-dom";

import useTypedEffect from "../../hooks/useTypedEffect.jsx";
import { Container } from "../../styles/container.jsx";
import { HomeSection } from "./styles.jsx";

import { MdArrowForwardIos } from "react-icons/md";

export const Home = () => {
    const strings = [
        "Desenvolvedor Web",
    ];
    const text = useTypedEffect(strings, 50, 50, 8000);
    return (
        <HomeSection>
            <Container>

                <h1>Dev Portfólio</h1>
                <h2>Olá, eu sou o <span>Guilherme</span> e um <span>{text}</span> </h2> 
                <p>
                    Bem-Vindo ao meu site pessoal. Aqui você pode encontrar informações sobre mim, meus projetos e como entrar em contato comigo.
                </p>

                <Link to="/about">
                    Sobre mim
                    <MdArrowForwardIos />
                </Link>
            </Container>
        </HomeSection>
    );
};
