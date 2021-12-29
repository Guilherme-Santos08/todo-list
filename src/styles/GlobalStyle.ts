import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
  }

  .Toastify__toast--error {
    background: #dd5554;
    color: #fff;
  }
  .Toastify__toast--error svg{
    fill: #fff
  }
  .Toastify__close-button {
    color: #fff;
  }
  .Toastify__progress-bar--error {
    background: #fff;
  }

  button {
    border: 0;
    outline: none;
  }

  body {
    font-size: 16px;
    font-family: "Roboto", sans-serif;
    background-color: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.textHeadiline};
  }
`;
