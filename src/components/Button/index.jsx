import { StyledButton, ExternalButton } from './styles';
import { MdArrowForwardIos } from 'react-icons/md';

export const Button = ({ to, children, primary, external }) => {
    if (external) {
        return (
            <ExternalButton href={to} target="_blank" rel="noreferrer" primary={primary}>
                {children}
                <MdArrowForwardIos />
            </ExternalButton>
        );
    }

    return (
        <StyledButton to={to} primary={primary}>
            {children}
            <MdArrowForwardIos />
        </StyledButton>
    );
};
