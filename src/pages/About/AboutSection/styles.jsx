import styled from 'styled-components';

export const Intro = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 90vh;
    padding: 4rem 0;

    h1 {
        font-size: .9rem;
        text-transform: uppercase;
        color: var(--text-color-light);
        font-weight: 500;
        letter-spacing: 0.2rem;
        margin-bottom: 2rem; 
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
        max-width: 500px;
        width: 100%;
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
    }

    @media (max-width: 324px) {
        h2 {
            font-size: 1.4rem;
        }
    }
`;

export const About = styled.div`
    padding: 6rem 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto;
    gap: 2rem;
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
    

    h2 {
        font-size: calc(1.35rem + 0.1vw);
        font-weight: 400;
        color: var(--text-color-light);
        margin-bottom: 2rem;
        letter-spacing: 0.1rem;
        height: fit-content;
        position: relative;

        &::after { 
            content: '';
            position: absolute;
            width: 5rem;
            height: 3px;
            background-color: var(--secondary-color);
            bottom: -10px;
            left: 0;
        }
    }

    p {
        grid-column: 2;
        grid-row: 1 / 3;
        font-size: calc(1rem + 0.1vw);
        color: var(--text-color-light-2);
        letter-spacing: 0.1rem;
        line-height: 1.8;
    }

    & > div:nth-child(3) {
        display: flex;                   
        flex-wrap: wrap;
        gap: 1rem;
        grid-column: 1;
    }

    & > div:nth-child(4) {
        display: flex;
        gap: 2rem;
        grid-column: 2;
        
        a {
            font-size: 1.3rem;
            color: var(--text-color-light);
            transition: color 0.3s;

            &:hover {
                color: var(--tertiary-color);
            }
        }
    }


    @media (max-width: 971px) {
        display: flex;
        flex-direction: column;

        & > div:nth-child(3) {
            gap: .5rem;
        }
    }
`;

export const Skills = styled.div`
    padding: 6rem 0;
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-template-rows: auto auto;
    gap: 3rem;
    position: relative;


    &::before {
        content: '';
        position: absolute;
        background-color: var(--primary-color);
        z-index: -1;
        top: 0;
        left: 50%;
        right: 50%;
        width: 100vw;
        height: 100%;
        transform: translateX(-50%);
    }

    h2 {
        font-size: calc(1.35rem + 0.1vw);
        font-weight: 400;
        color: var(--text-color-light);
        margin-bottom: 2rem;
        letter-spacing: 0.1rem;
        position: relative;
        height: fit-content;
        grid-column: 1;
        grid-row: 1;

        &::after { 
            content: '';
            position: absolute;
            width: 5rem;
            height: 3px;
            background-color: var(--secondary-color);
            left: 0;
            bottom: -10px;
        }
    }

    div {
        grid-column: 2;
        grid-row: 1 / 3;
    }   

    @media (max-width: 1184px) {
        display: flex;
        gap: 2rem;

        h2 {
            max-width: 500px;
            width: 100%;
        }
    }


    @media (max-width: 1010px) {
        display: flex;
        flex-direction: column;
    }

    @media (max-width: 440px) {
        div {
            justify-content: center;
        }
    }
`;

export const Services = styled.div`
    display: flex;

    
    & > div {
        width: 100%;
        padding: 4rem 3rem;

        & > div {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            background-color: var(--tertiary-color);
            padding: .2rem;
            margin-bottom: 2rem;

            svg {
                font-size: 2rem;
                color: var(--text-color-light);
            }
        }

        h3 {
            font-size:  calc(1rem + 0.1vw);
            font-weight: 400;
            color: var(--text-color-light);
            margin-bottom: .2rem;
            letter-spacing: 0.1rem;
            white-space: nowrap;
            position: relative;
        }

        p {
            font-size: 1rem;
            color: var(--text-color-light-2);
            letter-spacing: 0.1rem;
            line-height: 1.8;
            max-width: 300px;
            width: 100%;
        }
    }
    & > :nth-child(1),
    & > :nth-child(2)
    {
        border-right: 1px solid #333;
    }

    @media (max-width: 1242px) {
        p {
            font-size: 0.9rem;
        }
    }

    @media (max-width: 1000px) {
        flex-direction: column;

        & > div {
            padding: 3rem 0rem;
            position: relative;

            &::after {
                content: '';
                height: 1px;
                width: 100vw;
                background-color: #333;
                position: absolute;
                bottom: 0;
                left: 50%;
                right: 50%;
                transform: translateX(-50%);
            }

            
            p {
                max-width: 100%;
            }

        }
        & > :nth-child(1),
        & > :nth-child(2) {
            border-right: none;

        }
    }
    
    
`;