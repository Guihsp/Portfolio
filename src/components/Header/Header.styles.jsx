import styled  from "styled-components";

export const StyledHeader = styled.header`
    background-color: var(--background-color);
    color: var(--text-color-light);
    padding: 1rem 0;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1000;


    nav {
        display: flex;
        justify-content: space-between;
        align-items: center;

        h1 {
            font-size: 1.5rem;
        }

        ul {
            display: flex;
            gap: 3rem;

            li {
                font-size: 1rem;
                font-weight: 400;
            }

            a {
                transition: color 0.3s;

                &:hover {
                    color: var(--secondary-color);
                }
            }
        }
    }
`;