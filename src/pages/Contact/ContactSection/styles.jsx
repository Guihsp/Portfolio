import styled from "styled-components";

export const FormContainer = styled.div`
    padding: 6rem 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1 {
        font-size: 1.5rem;
        color: var(--text-color-light);
        margin-bottom: 2rem;
        background-color: var(--tertiary-color);
    }

    form {
        display: flex;
        flex-direction: column;
        gap: 1.2rem;
        max-width: 600px;
        width: 100%;
        margin: 1rem 0;

        input {
            padding: 1rem;
            border: none;
            border-bottom: 1px solid var(--text-color-light);
            outline: none;
            background-color: transparent;
            color: var(--text-color-light);
            transition: border-bottom 0.3s;

            &:focus {
                border-bottom: 1px solid var(--primary-color);
            }              
        }

        textarea {
            padding: 1rem;
            border: none;
            border-bottom: 1px solid var(--text-color-light);
            outline: none;
            background-color: transparent;
            color: var(--text-color-light);
            resize: none;
            height: 200px;
            transition: border-bottom 0.3s;

            &:focus {
                border-bottom: 1px solid var(--primary-color);
            }
        }

        button {
            padding: 1rem 2rem;
            border: 1px solid var(--secondary-color);
            background-color: var(--secondary-color);
            color: var(--text-color-dark);
            font-size: 1rem;
            font-weight: 500;
            cursor: pointer;
            transition: background-color 0.3s;

            &:hover {
                background-color: var(--primary-color);
                color: var(--text-color-light);
            }
        }
    }
    
    p {
        color: var(--text-color-light);
        font-size: calc(1rem + 0.1vw);
        text-transform: uppercase;
        margin: 1rem 0;
        position: relative;
        max-width: 100%;
        width: 100%;
        text-align: center;

        &::before, &::after {
            content: '';
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            width: 20%;
            height: 1px;
            background-color: var(--border-color);
        }

        &::before {
            right: 50%;
            margin-right: 2rem;
        }

        &::after {
            left: 50%;
            margin-left: 2rem;
        }
    }
`;

export const Contacts = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    margin-top: 1rem;

    a {
        color: var(--text-color-light);
        font-size: 1.5rem;
        transition: color 0.3s;

        &:hover {
            color: var(--primary-color);
        }
    }
`;

export const Message = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 80vh;
    
    p {
        font-size: 1.5rem;
        color: var(--text-color-light);
        background-color: var(--tertiary-color);
        margin: 2rem 0;
        width: fit-content;
    }

    div {
        display: flex;
        gap: 1rem;
        flex-wrap: wrap;
    }

    @media (max-width: 434px) { 
        p {
            font-size: 1.2rem;
        }

        div {
            flex-direction: column;
            gap: 1rem;
        }
    }

`;

export const StyledValidationError = styled.div`
    color: #f34949;
    font-size: 0.875rem;
    margin-top: 0.5rem;
    display: flex;
    align-items: center;

    svg {
        margin-right: 0.5rem;
    }
`;