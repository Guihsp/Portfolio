import styled from 'styled-components';

export const HomeSection = styled.section`
    padding: 6rem 0;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    
    & > div {
        display: flex;
        flex-direction: column;
        align-items: center;

        h1 {
            font-size: 3.5rem;
            color: var(--text-color-light);

            span {
                color: var(--secondary-color);
            }
        }

        p {
            font-size: 1.6rem;
            color: var(--text-color-light);
        }

       a {
            display: flex;
            align-items: center;
            font-size: 1.3rem;
            color: var(--secondary-color);
            border: 1px solid var(--secondary-color);
            padding: 0.5rem 1rem;
            border-radius: 16px;
            margin-top: 2rem;
            transition: color 0.2s;
            position: relative;
            overflow: hidden;

            &::before {
                content: '';
                position: absolute;
                top: 0;
                left: -100%;
                width: 100%;
                height: 100%;
                background-color: var(--secondary-color);
                transition: left 0.3s ease;
                z-index: -1;
            }

            &:hover::before {
                left: 0;
            }

            &:hover {
                color: var(--text-color-light);
            }
            
            span {
                position: relative;
                z-index: 1;
            }
       }
        
    }
`;