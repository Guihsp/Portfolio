import styled from 'styled-components';

export const HomeSection = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 90vh;
    
    h1 { 
        font-size: .9rem;
        text-transform: uppercase;
        color: var(--text-color-light);
        font-weight: 500;
        letter-spacing: 0.2rem;
        margin-bottom: 2rem;    
    }

    h2 {
        font-size: 2.5rem;
        font-weight: 600;
        letter-spacing: 0.1rem;
        color: var(--text-color-light);
        max-width: 640px;
        min-height: 7.5rem;

        span {
            background-color: var(--primary-color);
            white-space: nowrap;
        }
    }

    p {
        font-size: 1.2rem;
        color: var(--text-color-light-2);
        margin: 2rem 0;
        max-width: 50rem;
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

            span {
                white-space: break-spaces;
            }
        }

        p {
            font-size: 1rem;
        }
    }


    a {
        padding: 0.8rem 1rem;
        width: fit-content;
        color: var(--text-color-dark);
        background-color: var(--secondary-color);
        border: 1px solid var(--border-color);
        font-weight: 500;
        font-size: 1.1rem;
        position: relative;
        z-index: 1;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        transition: all 0.3s;
        
        &::after {
            content: "";
            position: absolute;
            inset: 0;
            background-color: var(--primary-color);
            height: 100%;            
            z-index: -1;
            transform: scaleX(0);
            transform-origin: right;
            transition: transform 0.3s ease-in-out;
        }

        &:hover::after {
            transform: scaleX(1);
            transform-origin: left;
        }

        &:hover {
            color: var(--text-color-light);
        }

    }
`;
