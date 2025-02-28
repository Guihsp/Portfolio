import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    :root {
        --background-color: #0d0d0d;
        --primary-color: #48008c;
        --secondary-color: #fff;
        --tertiary-color: #7b18d8;
        --text-color-light: #fff;
        --text-color-dark: #0d0d0d;
        --text-color-light-2: #FFFFFFC9;
        --border-color: #fff;
    }

    ::-webkit-scrollbar {
        width: 5px;
    }

    ::-webkit-scrollbar-thumb {
        background-color: var(--tertiary-color);
    }

    ::-webkit-scrollbar-track {
        background-color: var(--background-color);
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
        font-family: 'Poppins', sans-serif;
        background-color: var(--background-color);
        min-height: 100vh;
        overflow-x: hidden;
    }   

    .no-scroll {
        overflow: hidden;
    }
`;
