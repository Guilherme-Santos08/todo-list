import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  /* display: none; */
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2;
  cursor: pointer;

  .modal {
    margin: 4rem auto;
    padding: 3rem;

    background-color: ${props => props.theme.colors.backgroundSecondary};
    height: 500px;
    width: 500px;
    border-radius: 16px;
  }

  div + div {
    margin-top: 3rem;
  }

  .modal__input {
    height: 40px;
    width: 50%;
    position: relative;
    background-color: transparent;

    input[type="text"] {
      font-size: 1.1rem;
      color: #fff;

      height: 100%;
      width: 100%;
      border: none;
      border-bottom: 2px solid silver;
      background-color: transparent;

      &:focus ~ .underline::before {
        transform: scaleX(1);
      }
      &:focus ~ label {
        transform: translateY(-31px);
        font-size: 1rem;
      }
    }
    input[type="color"] {
      margin-top: 2rem;

      width: 30px;
      height: 30px;

      border: none;
      background-color: transparent;

      &[type="color"]::-webkit-color-swatch-wrapper {
        padding: 0;
      }
      &[type="color"]::-webkit-color-swatch {
        border: none;
        border-radius: 999px;
      }
    }

    .underline {
      position: absolute;
      bottom: 0;
      height: 2px;
      width: 100%;
    }

    .underline::before {
      position: absolute;
      content: "";
      height: 100%;
      width: 100%;
      background-color: red;
      transform: scaleX(0);
      transition: transform 0.3s ease;
    }

    label {
      color: #fff;

      position: absolute;
      left: 0;
      bottom: 12px;
      z-index: 99;

      pointer-events: none;
      transition: all 0.3s ease;
    }
  }
`;
