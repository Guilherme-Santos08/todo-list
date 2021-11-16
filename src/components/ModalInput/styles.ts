import styled from "styled-components";

export const Container = styled.div`
  .overlay {
    position: fixed;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    background-color: rgba(0, 0, 0, 0.8);
    cursor: pointer;
    display: none;
    overscroll-behavior: hidden;

    .overlay-content {
      height: 100%;
      overflow: hidden;
    }

    &.show-modal {
      display: block;
    }
  }

  .modal {
    position: fixed;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -250%);
    z-index: 12;

    margin: 8rem auto;
    padding: 3rem;

    width: 500px;
    max-width: 94%;
    background-color: ${props => props.theme.colors.backgroundSecondary};

    border-radius: 16px;
    box-shadow: 0px 2px 24px -16px rgba(152, 145, 145, 1);
    cursor: default;

    transition: all 0.5s ease;
    transition-delay: 300ms;
    &.show-modal {
      transform: translate(-50%, -65%);
    }
  }

  div + div {
    margin-top: 3rem;
  }

  .modal__input {
    height: 40px;
    width: 50%;
    position: relative;
    background-color: transparent;

    label {
      color: #fff;

      position: absolute;
      left: 0;
      bottom: 12px;
      z-index: 99;

      pointer-events: none;
      transition: all 0.3s ease;
    }

    input[type="text"] {
      font-size: 1.1rem;
      color: #fff;

      height: 100%;
      width: 100%;
      background-color: transparent;

      border: none;
      border-bottom: 2px solid silver;
      outline: none;

      &:focus ~ .underline::before {
        transform: scaleX(1);
      }

      &:focus ~ label,
      &:valid ~ label {
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
      background-color: ${props => props.theme.colors.backgroundThird};
      transform: scaleX(0);
      transition: transform 0.3s ease;
    }
  }

  .modal__button {
    width: 50%;
    button {
      color: ${props => props.theme.colors.textHeadiline};
      font-weight: bold;

      width: 100%;
      height: 40px;
      margin-top: 1rem;
      background-color: ${props => props.theme.colors.backgroundThird};

      border-radius: 10px;

      border: none;
      cursor: pointer;
      transition: opacity 0.2s ease;
      &:hover {
        opacity: 0.8;
      }
    }
  }

  @media (max-width: 636px) {
    .modal {
      &.show-modal {
        /* transform: translateY(-750px); */
      }
    }
  }

  @media (max-width: 425px) {
    .modal {
      .modal__input {
        width: 60%;
      }
    }
  }
`;
