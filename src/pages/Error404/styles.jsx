import styled from "styled-components";

export const ErrorSection = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 90vh;

    h1 {
        font-size: 1.5rem;
        color: var(--text-color-light);
        margin-bottom: 1rem;
        background-color: var(--primary-color);
        padding: 0.5rem 1rem;   
    }

    p {
        font-size: 1.2rem;
        color: var(--text-color-light-2);
        margin-bottom: 1rem;
    }

    a {
        padding: 0.5rem 1rem;
        width: fit-content;
        color: var(--text-color-dark);
        font-weight: 500;
        transition: all 0.3s;
        background-color: var(--secondary-color);
        z-index: 1;
        position: relative;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        
        &::after {
            content: "";
            position: absolute;
            inset: 0;
            background-color: var(--primary-color);
            z-index: -1;
            transform: scaleX(0);
            transform-origin: right;
            transition: transform 0.3s;
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