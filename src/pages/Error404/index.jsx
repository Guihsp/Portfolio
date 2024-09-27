import { ErrorSection } from "./styles.jsx";

export const Error404 = () => {
    return (
        <ErrorSection>
            <h1>Erro 404</h1>
            <p>
                Ops! A página que você está procurando não foi encontrada.
            </p>

            <a href="/">Voltar para a página inicial</a>
        </ErrorSection>
    );
}