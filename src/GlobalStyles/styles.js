import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body, #root {
        max-height: 100vh;
        max-width: 100vw;
        height: 100%;
        width: 100%;
        background-color: #000000;
        font-family: "Segoe UI", "Helvetica Neue", Helvetica, "Lucida Grande", Arial, Ubuntu, Cantarell, "Fira Sans", sans-serif;
    }

    *, button, input {
        border: 0;
        background: none;
    }

    :root {
        --color-icon: #b1b3b5;
        --intro-secondary: #a6a8aa;
    }
`;