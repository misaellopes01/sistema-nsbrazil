import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,200;0,300;0,400;1,100;1,200;1,300;1,400&display=swap');

* {
    
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    width: 100vw;
    height: 100vh;
    background-color: #f4f4f4;
    font-family: Montserrat, sans-serif;
}

`

export default GlobalStyle;