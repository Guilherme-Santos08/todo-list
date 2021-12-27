import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  gap: 5.75rem;
  padding: 0 1.5rem;

  .welcome {
    width: 34%;
    h1 {
      font-size: 2.5rem;
    }
    p {
      font-size: 2rem;
      font-weight: bold;
      margin-bottom: 1.75rem;
    }
    span {
      color: ${props => props.theme.colors.backgroundThird};
    }
  }

  .login {
    display: flex;
    flex-direction: column;

    max-width: 400px;
    width: 100%;
    background-color: ${props => props.theme.colors.backgroundSecondary};
    padding: 3.5rem 2.5rem;

    border-radius: 8px;

    span {
      position: relative;
      font-size: 12px;
      color: rgb(135, 134, 139);
      margin: 1rem 0px;
      text-align: center;

      &::before {
        content: "";
        position: absolute;
        right: 0;
        top: 50%;
        width: calc(50% - 25px);
        height: 1px;
        background: rgb(40, 39, 47);
      }

      &::after {
        content: "";
        position: absolute;
        left: 0;
        top: 50%;
        width: calc(50% - 25px);
        height: 1px;
        background: rgb(40, 39, 47);
      }
    }

    button {
      display: flex;
      align-items: center;
      justify-content: center;

      font-size: 1rem;
      font-weight: bold;
      text-transform: uppercase;

      background-color: rgb(41, 41, 46);
      color: #fff;

      height: 50px;

      border-radius: 8px;
      border: none;
      cursor: pointer;
      transition: background 0.2s ease;

      &:hover {
        background-color: #1259b9;
      }

      span {
        margin-right: 1rem;
      }
    }

    .login-github {
      span {
        color: ${props => props.theme.colors.backgroundThird};
        transition: color 0.2s ease;
      }
      &:hover {
        span {
          color: #fff;
        }
      }
    }
  }

  @media (max-width: 1024px) {
    flex-direction: column;
    text-align: center;
    gap: 40px;
    
    .welcome {
      width: 42%;
      h1 {
        font-size: 1.5rem;
      }
    }
  }
  @media (max-width: 460px) {
    .welcome {
      width: 100%;
    }
  }
`;
