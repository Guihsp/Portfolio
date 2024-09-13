import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    :root {
        --background-color: #0B0C10;
        --primary-color: #0B0C10;
        --secondary-color: #45A29E;
        --text-color-light: #fff;
        --text-color-dark: #1F2833;
    }

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    ul {
        list-style: none;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    body {
        background-color: var(--background-color);
        font-family: 'Poppins', sans-serif;
        min-height: 100vh;
    }    
`;