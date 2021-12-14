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

      button,
      .search-box {
        font-size: 1.2rem;

        color: ${props => props.theme.colors.textHeadiline};
        background-color: transparent;

        cursor: pointer;
        border: none;
      }

      .btn__add {
        /* border: 2px solid ${props => props.theme.colors.background}; */
        border-radius: 5px;
      }

      .search-box {
        display: flex;
        justify-content: flex-end;

        input {
          font-size: 1.1rem;
          color: #fff;

          height: 100%;
          width: 0;
          background-color: transparent;

          border: none;
          border-bottom: 2px solid silver;
          outline: none;

          transition: width 0.8s ease;
        }
        &:hover input,
        input:valid {
          margin-left: 0.7rem;
          width: 100%;
        }
      }

      .show-modal {
        position: relative;
      }

      img {
        width: 2.2rem;
        height: 2.2rem;
        border-radius: 99px;
      }
    }
  }
`;
