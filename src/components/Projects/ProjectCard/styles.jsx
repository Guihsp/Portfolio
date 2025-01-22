import styled from "styled-components";

export const Card = styled.li`
    padding: 6rem 5rem;
    display: flex;
    justify-content: space-between;
    align-items: start;
    gap: 6rem;
    position: relative;
    
    &::after {
        content: "";
        height: 1px;
        width: 100vw;
        background-color: #333;
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
    }

    & > a:nth-child(1) {
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        max-width: 450px;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    & > a:nth-child(2) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 1rem;

        div {
            display: flex;
            gap: 1rem;

            :nth-child(1) {
                font-size: .9rem;
                color: var(--text-color-light);
                background-color: var(--primary-color);
                padding: 0rem .5rem;
                letter-spacing: 1px;
                white-space: nowrap;
            }

            :nth-child(2) {
                color: var(--text-color-light-2);
                font-size: .9rem;
                letter-spacing: 1px;
                white-space: nowrap;
            }
        }

        h2 {
            color: var(--text-color-light);
            font-size: 1.3rem;
            font-weight: 400;
            letter-spacing: 1px;
        }

        a {
            padding: .5rem 1rem;
            width: fit-content;
        }   
    }

    @media (max-width: 1096px) {
        padding: 4rem 3rem;
        gap: 3rem;

        & > a:nth-child(1) {
            max-width: 350px;
        }

        & > a:nth-child(2) {
            h2 {
                font-size: 1rem;
            }
        }
    }

    @media (max-width: 873px) {
        flex-direction: column;

        & > a:nth-child(1) {
            max-width: 100%;
        }

    }


    @media (max-width: 576px) {
        padding: 3rem 2rem;
        gap: 2rem;

        & > a:nth-child(2) {

            div {
                gap: .5rem;

                p{
                    font-size: .7rem;
                }
            }

            h2 {
                font-size: .9rem;
            }
        }
    }

    @media (max-width: 420px) {
        padding: 2rem 1rem;
        gap: 1rem;
    }
`;