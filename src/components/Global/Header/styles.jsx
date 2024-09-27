import styled from "styled-components";

export const StyledHeader = styled.header`
    position: sticky;
    top: 0;
    z-index: 999;
    background-color: var(--background-color);

   nav {
        display: flex;  
        justify-content: space-between;
        align-items: center;
        padding: 1.5rem 0;

        &:last-child svg{
            height: 30px;
            width: 30px;
            color: var(--text-color-light);
        }
        
    }

    ul {
        display: flex;
        align-items: center;
        gap: 1.5rem;

        @media (max-width: 728px) {
            display: none;
            flex-direction: column;
            gap: 0;
            align-items: center;
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.3s ease-in-out;
            background-color: var(--background-color);
            z-index: 999;

            &.active {
                display: block;
                max-height: 100vh;

                li {
                    border-bottom: 1px solid var(--border-color);
                    width: 100%;
                    padding: 1rem 0 1rem 1rem;
                }
            }
        }

        li {
            a {
                color: var(--text-color-light);
                font-weight: 400;
                padding: 0.5rem .5rem;
                position: relative;

                &.active {
                        &::after {
                            content: "";
                            position: absolute;
                            inset: 0;
                            background-color: var(--primary-color);
                            z-index: -1;
                            transform: scaleX(1);
                            transform-origin: left;
                            transition: transform 0.3s ease-in-out;
                            top: 10%;
                        }

                }

                &::after {
                    content: "";
                    position: absolute;
                    inset: 0;
                    transform: scaleX(0);
                    transform-origin: right;
                    background-color: var(--primary-color);
                    transition: transform 0.3s ease-in-out;
                    height: 80%;
                    top: 10%;                    
                    z-index: -1;
                }

                &:hover::after {
                    transform: scaleX(1);
                    transform-origin: left;
                }
            }    
        }
    }   
`;

export const ButtonMenu = styled.button`
    display:none;

    @media (max-width: 728px) {
        display: flex;
        flex-direction: column;
        gap: .3rem;
        background-color: transparent;
        border: none;
        cursor: pointer;
        position: relative;
        width: 1.7rem;
        height: 1.7rem;

        div {            
            background-color: var(--text-color-light);
            height: 3px;
            width: 1.7rem;
            transition: all 0.3s;
        }

        div:nth-child(1) {
            transform: ${({ active }) => active ? 'rotate(45deg) translate(0.4rem, 0.4rem)' : 'none'};
        }

        div:nth-child(2) {
            opacity: ${({ active }) => active ? '0' : '1'};
        }

        div:nth-child(3) {
            transform: ${({ active }) => active ? 'rotate(-45deg) translate(0.3rem, -0.3rem)' : 'none'};
        }
    }
`;
