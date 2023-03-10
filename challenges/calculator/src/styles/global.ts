import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root{
    --background: #212529;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  /* Font size: 16px (Desktop) */
  html{
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }
    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }
  body{
    background: linear-gradient(#807ECE, #8E7ECE);
    -webkit-font-smoothing: antialiased;
  }
  body, input, textarea, button {
    font-family: 'Rubik', sans-serif;
    font-weight: 400;
  }
  h1,h2,h3,h4,h5,h6{
   font-weight: 600;
  }
  button{
    cursor: pointer;
  }
  [disabled]{
    opacity: 0.6;
    cursor: not-allowed
  }
`;
