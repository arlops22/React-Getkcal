import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle `
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body, #root {
        max-width: 100vw;
        max-height: 100vh;
        
        background: var(--dark);
    }

    *, button, input {
        border: none;
        background: none;
        outline: 0;

        font: 400 16px Dosis, sans-serif;
        color: var(--white);
    }

    :root {
        --green: #80B918;
        --yellow: #DDDF00;
        --orange: #F48C06;
        --white: #FEFAE0;
        --dark: #081C15;
        --dark-input: #04100C;
    }
`;

export default GlobalStyle;