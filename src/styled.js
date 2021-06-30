import { createGlobalStyle } from 'styled-components';

export const Global = createGlobalStyle`
  
  *{
    box-sizing: border-box;
    font-family: 'Roboto',sans-serif;
    font-size: 16px;
  }
    body{
      padding: 0;
      margin: 0;
      background-color: #111;
    }
    
    img{
      width: 100%;
    }
    
    a{
      text-decoration: none;
      color: inherit;
    }
`;
