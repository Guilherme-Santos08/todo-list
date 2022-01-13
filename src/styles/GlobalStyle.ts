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
  
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0,0,0,0);
    border: 0;
  }

  body {
    font-size: 16px;
    font-family: "Roboto", sans-serif;
    background-color: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.textHeadiline};
  }
`;
