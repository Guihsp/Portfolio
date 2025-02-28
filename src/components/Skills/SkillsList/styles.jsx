import styled from 'styled-components';

export const List = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: start;

    li {
        flex: 1 1 calc(33.333% - 1rem); 
        box-sizing: border-box;
    }

    @media (max-width: 603px) {
        justify-content: center;
    }

    @media (max-width: 768px) {
        li {
            flex: 1 1 calc(50% - 1rem); 
        }
    }

    @media (max-width: 480px) {
        li {
            flex: 1 1 100%; 
        }
    }
`;