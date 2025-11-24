import { Intro, About, Skills, Services, Experience } from './styles.jsx';
import { Container } from '../../../components/Global/Container';
import { Button } from '../../../components/Button';
import { SkillsList } from '../../../components/Skills/SkillsList';
import { useTypedEffect } from '../../../hooks/useTypedEffect.jsx';
import { FaInstagram, FaLinkedinIn, FaGithubAlt, FaRegEnvelope } from "react-icons/fa";
import { GoGear } from "react-icons/go";
import { FiPhone } from "react-icons/fi";
import { TbDeviceDesktopCode } from "react-icons/tb";
import { BiDevices } from "react-icons/bi";

export const AboutSection = () => {
    const strings = ["Tudo que você precissa saber sobre mim"];
    const text = useTypedEffect(strings, 50, 50, 10000);

    return (
        <Container>
            <Intro>
                <h1>Sobre</h1>
                <h2>
                    <span>{text}</span>
                </h2>
                <p>
                    Criando aplicações web completas, responsivas e escaláveis.
                </p>
            </Intro>

            <About>
                <h2>
                    Um dev apaixonado por tecnologia e programação.
                </h2>
                <p>
                    Sou Desenvolvedor de Software com experiência prática em aplicações full-stack no setor financeiro,
                    atuando no front-end com Angular e React e no back-end com Java, Spring Boot, Node.js e Nest.js.
                    Tenho facilidade em aprender rapidamente, traduzir problemas complexos em soluções objetivas e
                    trabalhar com APIs, integrações e arquiteturas escaláveis.
                    <br />
                    Sou formado em Análise e Desenvolvimento de Sistemas pelo Senac e sigo evoluindo minhas habilidades
                    com foco em escrever código limpo, seguro e bem estruturado, sempre buscando impacto real para o usuário e
                    para o produto.
                </p>

                <div>
                    <Button to="/contact" primary>
                        Fale comigo
                    </Button>

                    <Button to="/cv/cv-guilherme-henrique.pdf" external >
                        Ver currículo
                    </Button>
                </div>

                <div>
                    <a href="https://www.instagram.com/guizin__Silva" target="_blank" rel="noreferrer">
                        <FaInstagram />
                    </a>
                    <a href="https://linkedin.com/in/guilherme-henrique-silva-pereira-9283b023a" target="_blank" rel="noreferrer">
                        <FaLinkedinIn />
                    </a>
                    <a href="https://github.com/Guihsp" target="_blank" rel="noreferrer">
                        <FaGithubAlt />
                    </a>
                    <a href="mailto:guilhermehsp26@gmail.com" target="_blank" >
                        <FaRegEnvelope />
                    </a>
                    <a href="https://api.whatsapp.com/send?phone=5511993123958" target='__blank' rel="noreferrer">
                        <FiPhone />
                    </a>
                </div>
            </About>

            <Skills>
                <h2> Usando as melhores tecnologias do mercado. </h2>
                <SkillsList />
            </Skills>

            <Services>
                <div>
                    <div>
                        <TbDeviceDesktopCode />
                    </div>
                    <h3>Desenvolvimento Full-Stack</h3>
                    <p>
                        Criação de aplicações completas, do front-end ao back-end, com foco em desempenho e escalabilidade.
                    </p>
                </div>
                <div>
                    <div>
                        <BiDevices />
                    </div>
                    <h3>Responsividade</h3>
                    <p>
                        Interfaces adaptáveis para uma experiência fluida em qualquer dispositivo.
                    </p>
                </div>
                <div>
                    <div>
                        <GoGear />
                    </div>
                    <h3>APIs REST</h3>
                    <p>
                        Desenvolvimento e consumo de APIs para integração eficiente entre sistemas.
                    </p>
                </div>

            </Services>

            <Experience >
                <h2> Experiência </h2>
                <div className='time-line'>
                    <div className='time-line_item'>
                        <div>
                            <h3 className='time-line_item_title'>Software Developer</h3>
                            <h4 className='time-line_item_subtitle'>Grupo Sarfaty</h4>
                            <time className='time-line_item_time'>Junho 2025 - Presente</time>
                            <p className='time-line_item_description'>
                                Desenvolvimento de funcionalidades para operações financeiras utilizando
                                Angular no front-end e Java/Node.js no back-end. Atuação em projetos de
                                crédito, validação de arquivos financeiros e controle de acesso.
                            </p>
                        </div>
                    </div>
                </div>
            </Experience>
        </Container>
    );
};