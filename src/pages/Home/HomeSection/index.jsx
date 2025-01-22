import { useTypedEffect } from "../../../hooks/useTypedEffect.jsx";
import { Container } from "../../../components/Global/Container";
import { Intro } from "./styles.jsx";
import { Button } from "../../../components/Button";

export const HomeSection = () => {
    const strings = ["Desenvolvedor Web"];
    const text = useTypedEffect(strings, 50, 50, 8000);

    return (
        <Container>
            <Intro>
                <h1>Dev Portfólio</h1>
                <h2>Olá, eu sou o <span>Guilherme</span> e sou <span>{text}</span> </h2>
                <p>
                    Bem-Vindo ao meu site pessoal. Aqui você pode encontrar informações sobre mim, meus projetos e como entrar em contato comigo.
                </p>

                <div>
                    <Button to="/about" primary>
                        Sobre mim
                    </Button>

                    <Button to="/cv/cv-guilherme-henrique-silva-pereira.pdf" external>
                        Ver currículo
                    </Button>
                </div>
            </Intro>
        </Container>
    );
};