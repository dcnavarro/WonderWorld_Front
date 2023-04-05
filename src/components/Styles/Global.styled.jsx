import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Alkatra');
  
  *{
    box-sizing: border-box;
  }

  body{
    background: ${({theme}) => theme.colors.body};
    color: hsl(192, 100%, 9%);
    font-family: 'Alkatra';
    font-size: 1.15em;
    margin:0;
  }

  h1{
    font-family: 'Alkatra';
  }

  h2{
    font-family: 'Alkatra';
  }

  h3{
  font-family: 'Alkatra';
  }

  h4{
  font-family: 'Alkatra';
  }

  h5{
  font-family: 'Alkatra';
  }

  p{
    opacity: 0.6;
    line-height: 1.5;
  }

  img {
    max-width: 100%
  }
`