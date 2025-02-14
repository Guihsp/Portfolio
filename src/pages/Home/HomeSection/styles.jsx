import styled from 'styled-components';

export const Intro = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 85vh;
    padding: 2rem 0;
    
    h1 { 
        font-size: .9rem;
        text-transform: uppercase;
        color: var(--text-color-light);
        font-weight: 500;
        letter-spacing: 0.2rem;
        margin-bottom: 1.5rem;    
    }

    h2 {
        font-size: 3rem;
        font-weight: 600;
        letter-spacing: 0.1rem;
        color: var(--text-color-light);
        max-width: 800px;

        span {
            background-color: var(--tertiary-color);
        }
    }

    p {
        font-size: 1.2rem;
        color: var(--text-color-light-2);
        margin: 2rem 0;
        max-width: 50rem;
    }

    div {
        display: flex;
        gap: 1rem;
    }

    @media (max-width: 768px) {
        h1 {
            font-size: 1rem;
        }

        h2 {
            font-size: 2rem;
        }

        p {
            font-size: 1.1rem;
        }
    }

    @media (max-width: 520px) {
        h1 {
            font-size: 0.8rem;
        }

        h2 {
            font-size: 1.8rem;
        }

        p {
            font-size: 1rem;
        }
    }

    @media (max-width: 420px) {
        h1 {
            font-size: 0.8rem;
        }

        h2 {
            font-size: 1.6rem;
        }

        p {
            font-size: 0.9rem;
        }

        div {
            gap: 0.5rem;
            a {
                padding: 0.8rem 1rem;
                font-size: 0.9rem;
            }
        }
    }

    @media (max-width: 324px) {
        h2 {
            font-size: 1.4rem;
        }
    }
    
`;
