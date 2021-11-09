import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
  }

  body {
    font-size: 16px;
    font-family: "Roboto", sans-serif;
    background-color: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.textHeadiline};
  }
`;
