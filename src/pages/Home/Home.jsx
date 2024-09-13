import { Link } from "react-router-dom";


import { IoIosArrowForward } from "react-icons/io";
import { Container } from "../../components/Container/Container.styles.jsx";
import { HomeSection } from "./Home.styles.jsx";

export const Home = () => {
    return (
        <HomeSection>
            <Container>
                <h1>Olá, eu sou o <span>Guilherme</span></h1>
                <p>Transformando ideias em realidade através do código.</p>
               
                <Link to="/about">
                    Sobre mim
                    <IoIosArrowForward />
                </Link>
                    
            </Container>
        </HomeSection>
    );
}