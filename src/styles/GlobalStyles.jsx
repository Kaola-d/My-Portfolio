import { createGlobalStyle } from 'styled-components';
import lightBackground from '../assets/png/orangbck.png';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  /* Body styling based on route */
  body {
    background: ${({ theme, darkMode }) =>
      darkMode 
        ? '#121212' 
        : window.location.pathname === '/' 
        ? `url(${lightBackground}) no-repeat center center fixed` 
        : '#FFF8F3'};
    background-size: cover;
    background-attachment: fixed;
    color: ${({ theme }) => theme.textColor};
    font-family: 'Ubuntu', sans-serif;
    transition: all 0.3s ease-in-out;
  }

  div, h1, h2, h3, h4, h5, p, a, button {
    color: ${({ theme }) => theme.textColor};
    transition: color 0.3s ease '#FFF8F3';
  }
`;

export default GlobalStyles;
