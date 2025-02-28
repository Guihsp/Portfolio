import { useForm, ValidationError } from '@formspree/react';
import { Container } from '../../../components/Global/Container';
import { Button } from '../../../components/Button';
import { FaInstagram, FaLinkedinIn, FaRegEnvelope } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { FormContainer, Message, StyledValidationError, Contacts } from './styles'

export const ContactSection = () => {
    const [state, handleSubmit] = useForm("xannvdew");

    if (state.succeeded) {
        return (
            <Container>
                <Message>
                    <p>Email enviado com sucesso!</p>

                    <div>
                        <Button to='/' primary>
                            Voltar ao início
                        </Button>
                    </div>
                </Message>
            </Container>
        )
    }


    return (
        <Container>
            

            <FormContainer>
                <h1>Entre em contato</h1>
                <form onSubmit={handleSubmit}>
                    <label htmlFor='name' hidden>Nome</label>
                    <input
                        id='name'
                        type='text'
                        name='name'
                        placeholder='Seu nome'
                        required
                    />
                    <StyledValidationError>
                        <ValidationError message="Nome é obrigatório" field="name" errors={state.errors} />
                    </StyledValidationError>

                    <label htmlFor='email' hidden>Email</label>
                    <input
                        id='email'
                        type='email'
                        name='email'
                        placeholder='Seu email'
                        required
                    />
                    <StyledValidationError>
                        <ValidationError message="Você precisa informar um email válido" field="email" errors={state.errors} />
                    </StyledValidationError>

                    <label htmlFor='subject' hidden>Assunto</label>
                    <input
                        id='subject'
                        type='text'
                        name='subject'
                        placeholder='Assunto'
                        required
                    />
                    <StyledValidationError>
                        <ValidationError message="Assunto é obrigatório" field="subject" errors={state.errors} />
                    </StyledValidationError>


                    <label htmlFor='message' hidden>Mensagem</label>
                    <textarea
                        id='message'
                        name='message'
                        placeholder='Sua mensagem'
                        required
                    />
                    <StyledValidationError>
                        <ValidationError message="Mensagem é obrigatória" field="message" errors={state.errors} />
                    </StyledValidationError>

                    <button type="submit" disabled={state.submitting}>
                        Enviar
                    </button>
                </form>

                <p>ou</p>

                <Contacts>
                    <a href="https://www.instagram.com/guizin__Silva" target="_blank" rel="noreferrer">
                        <FaInstagram />
                    </a>
                    <a href="https://linkedin.com/in/guilherme-henrique-silva-pereira-9283b023a" target="_blank" rel="noreferrer">
                        <FaLinkedinIn />
                    </a>
                    <a href="mailto:guilhermehsp26@gmail.com" target="_blank" rel="noreferrer">
                        <FaRegEnvelope />
                    </a>
                    <a href="https://api.whatsapp.com/send?phone=5511993123958" target='__blank' rel="noreferrer">
                        <FiPhone />
                    </a>
                </Contacts>

            </FormContainer>
            
        </Container>
    );
};