import styled from "styled-components";

export const Container = styled.header`
  background-color: ${props => props.theme.colors.backgroundSecondary};
  padding: 0.5rem 1rem;

  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  right: 0;
  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;

    span {
      font-weight: bold;
      font-size: 1.2rem;
    }

    ul {
      display: flex;
      align-items: center;

      li + li {
        margin-left: 1.4rem;
      }

      li,
      button {
        display: flex;
        align-items: center;
      }

      button {
        font-size: 1.2rem;
        padding: 0.2rem;
        text-align: center;

        color: ${props => props.theme.colors.textHeadiline};
        background-color: transparent;

        cursor: pointer;
        border: none;
      }

      .btn__add {
        /* border: 2px solid ${props => props.theme.colors.background}; */
        border-radius: 5px;
      }

      img {
        width: 2.2rem;
        height: 2.2rem;
        border-radius: 99px;
      }
    }
  }
`;
