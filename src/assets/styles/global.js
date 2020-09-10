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
        
        
    }

    *, button, input {
        border: none;
        background: none;
        outline: 0;

        font: 400 16px Dosis, sans-serif;
    }

    :root {

    }
`;

export default GlobalStyle;