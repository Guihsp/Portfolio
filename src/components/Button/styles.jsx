import styled from 'styled-components';
import { Link } from 'react-router-dom';

const BaseButton = styled.a`
    padding: 1rem;
    height: fit-content;
    color: ${({ primary }) => (primary ? 'var(--text-color-dark)' : 'var(--text-color-light)')};
    background-color: ${({ primary }) => (primary ? 'var(--secondary-color)' : 'transparent')};
    border: 1px solid var(--border-color);
    font-weight: 400;
    font-size: 1rem;
    white-space: nowrap;
    position: relative;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.5rem;
    transition: all 0.3s;

    &::after {
        content: "";
        position: absolute;
        inset: 0;
        background-color: var(--primary-color);
        z-index: -1;
        transform: scaleX(0);
        transform-origin: right;
        transition: transform 0.3s ease-in-out;
    }

    &:hover::after {
        transform: scaleX(1);
        transform-origin: left;
    }

    &:hover {
        color: var(--text-color-light);
    }

    @media (max-width: 768px) {
        font-size: 0.9rem;
        padding: 0.8rem;
    }
`;

export const StyledButton = styled(BaseButton).attrs({ as: Link })``;

export const ExternalButton = styled(BaseButton)``;