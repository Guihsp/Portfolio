import styled from 'styled-components';

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 5rem;
    width: 5rem;
    
    background-color: var(--tertiary-color);
    color: var(--secondary-color);

    p {
        font-size: .9rem;
    }
`;