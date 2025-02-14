import { Intro, About, Skills, Services } from './styles.jsx';
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
                    Criando sites e aplicações web com as melhores tecnologias do mercado.
                </p>
            </Intro>

            <About>
                <h2>
                    Um dev apaixonado por tecnologia e programação.
                </h2>
                <p>
                    Desenvolvedor Web com experiência em React, Next.js, TypeScript, Java, Angular, MySQL,
                    e consumo de APIs REST. Tambem tenho conhecimento em projetos com metodologias ágeis,
                    como o Scrum. Apaixonado por tecnologia e programação, sempre buscando aprender mais e
                    se aprimorar. Atuamente cursando Análise e Desenvolvimento de Sistemas no Senac - Santo Amaro.
                </p>

                <div>
                    <Button to="/contact" primary>
                        Fale comigo
                    </Button>

                    <Button to="/cv/cv-guilherme-henrique-silva-pereira.pdf" external >
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
                    <h3>Desenvolvimento Web</h3>
                    <p>
                        Desenvolvimento de sites e aplicações web completas, com as melhores tecnologias do mercado.
                    </p>
                </div>
                <div>
                    <div>
                        <BiDevices />
                    </div>
                    <h3>Responsividade</h3>
                    <p>
                        Sites e aplicações web responsivos, que se adaptam a qualquer dispositivo.
                    </p>
                </div>
                <div>
                    <div>
                        <GoGear />
                    </div>
                    <h3>APIs REST</h3>
                    <p>
                        Consumo e criação de APIs REST para integração de sistemas.
                    </p>
                </div>

            </Services>
        </Container>
    );
};