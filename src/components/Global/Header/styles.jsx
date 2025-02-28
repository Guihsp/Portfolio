import styled from "styled-components";

export const HeaderContainer = styled.header`
    position: sticky;
    top: 0;
    z-index: 999;
    background-color: var(--background-color);
    border-bottom: 1px solid #333;


    div {
        display: flex;
        justify-content: space-between;
        align-items: center;

        nav {
            display: flex;  
            justify-content: space-between;
            align-items: center;
            padding: 1.5rem 0;
        }
     
        ul {
            display: flex;
            align-items: center;
            gap: 1.5rem;
     
            @media (max-width: 728px) {
                display: none;
                position: absolute;
                top: 100%;
                left: 0;
                width: 100%;
                background-color: var(--background-color);
                z-index: 999;
     
                &.active {
                    display: block;
                    overflow-y: auto;
                    height: 100vh;
                    border-top: 1px solid var(--border-color);
                    li {
                        width: 100%;
                        padding: 1rem 1rem;
                        border-bottom: 1px solid var(--border-color);
                         
                    }
                }
            }
     
            li {
                a {
                    color: var(--text-color-light);
                    font-weight: 400;
                    letter-spacing: 1px;
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
