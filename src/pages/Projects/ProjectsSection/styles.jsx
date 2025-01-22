import styled from 'styled-components';

export const Intro = styled.section`
    min-height: 50vh;
    padding: 4rem 0;
    display: flex;
    justify-content: center;
    align-items: center;

    h1 {
        font-size: 3rem;
        font-weight: 600;
        color: var(--text-color-light);
        background-color: var(--tertiary-color);
    }

    @media screen and (max-width: 768px) {
        h1 {
            font-size: 2rem;
        }
    }
`;

export const Projects = styled.section`
    position: relative;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 50%;
        right: 50%;
        height: 1px;
        width: 100vw;
        background-color: #333;     
        z-index: -1;
        transform: translateX(-50%);
    }
`;