import styled from 'styled-components';

export const LoaderContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    height: 100%;
    width: 100%;
`;

export const LoaderSpinner = styled.div`
    border: 5px solid rgba(0, 0, 0, 0.1);
    border-left: 5px solid var(--tertiary-color);
    border-radius: 50%;
    width: 50px;
    height: 50px;
    animation: spin 1s linear infinite;

    @keyframes spin {
        to {
            transform: rotate(360deg);
        }
    }
`;