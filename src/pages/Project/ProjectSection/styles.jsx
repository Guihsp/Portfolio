import styled from 'styled-components';

export const ProjectDetails = styled.div`

    & > :nth-child(1) {
        position: relative;
        padding: 4rem 8rem 4rem 0;

        &::before {
            content: '';
            position: absolute;
            bottom: 0;
            left: 50%;
            right: 50%;
            height: 1px;
            width: 100vw;
            background-color: #333;     
            z-index: -1;
            transform: translateX(-50%);
        }
        
        div {
            display: flex;
            gap: 1rem;
            align-items: center;

            h1 {
                font-size: 1rem;
                font-weight: 400;
                letter-spacing: 1px;
                background: var(--primary-color);
                color: var(--text-color-light);
                padding:0 0.5rem;
            }

            p {
                font-size: .9rem;
                font-weight: 300;
                letter-spacing: 1px;
                color: var(--text-color-light-2);
            }
        }

        h2 {
            font-size: 2rem;
            font-weight: 400;
            letter-spacing: 1px;
            color: var(--text-color-light);
            margin-top: 1rem;
        }

        @media (max-width: 1109px) {
            padding: 4rem 4rem 4rem 0;
        }

        @media (max-width: 951px) {
            padding: 4rem 0rem 4rem 0;

            h2 {
                font-size: 1.8rem;
            }
        }

        @media (max-width: 855px) {
            h2 {
                font-size: 1.6rem;
            }
        }

        @media (max-width: 535px) {
            
            div {
                h1, p {
                    font-size: .8rem;
                }
            }

            h2 {
                font-size: 1.4rem;
            }
        }

        @media (max-width: 375px) {
            h2 {
                font-size: 1.2rem;
            }
        }

    }

    & > :nth-child(2) {
        display: grid;
        grid-template-columns: 3fr 1fr;
        grid-template-rows: auto;
        gap: 2rem;
        padding: 4rem 2rem;

        iframe {
            max-width: 800px;
            width: 100%;     
            height: calc(800px * 9 / 16);
        }

        & > p {
            font-size: calc(1rem + 0.1vw);
            font-weight: 300;
            text-align: left;
            letter-spacing: 1px;
            color: var(--text-color-light-2);
            max-width: 850px;
            width: 100%;
            grid-column: 1;
            grid-row: 2;
            margin-top: 2rem ;
        }

        div {
            position: sticky;
            top: 4rem;

            div {
                padding: 4rem 0; 

                p {
                    font-size: calc(1rem + 0.1vw);
                    font-weight: 300;
                    text-align: left;
                    letter-spacing: 1px;
                    color: var(--text-color-light-2);
                    margin-bottom: 2rem;
                }

                a {
                    margin-bottom: 1rem;
                }
            }
        }   

        @media (max-width: 855px) {
            display: flex;
            flex-direction: column;
            padding: 4rem 0;

            iframe {
                margin:0 ;
            }

            div {
                div {
                    width: 100%;
                    display: flex;
                    flex-wrap: wrap;
                    gap: 1rem;
                    padding: 0;
    
                    p {
                        display: none;
                    }
                }
            }
        }

        @media (max-width: 535px) {
            iframe {
                height: calc(400px * 9 / 16);
            }

            div {
                gap: .5rem;
                a {
                    padding: 1rem .8rem;
                    font-size: .9rem;
                }
            }
        }
    }
`;