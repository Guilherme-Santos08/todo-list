import styled from "styled-components";

export const Container = styled.div`
  > div {
    position: fixed;
    z-index: 999;
    top: 0px;
    left: 0px;

    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.75);

    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;
    visibility: hidden;
    opacity: 0;
    transition: all .3s ease 0s;

    &.show-modal {
      visibility: visible;
      opacity: 1;

      .box {
        opacity: 1;
        transform: translateY(0px);
      }
    }

    .box {
      display: flex;
      align-items: center;
      flex-direction: column;

      background-color: ${props => props.theme.colors.backgroundSecondary};
      padding: 3rem;
      border-radius: 8px;

      overflow: hidden;
      transform: translateY(-100px);
      opacity: 0;
      transition: transform 0.3s ease 0s, opacity 0.4s ease 0s;

      p {
        font-size: 1.3rem;
        font-weight: bold;
        text-align: center;
        line-height: 28px;

        width: 290px;
        margin-bottom: 1.8rem;
      }

      .btns {
        button {
          font-size: 0.9rem;
          font-weight: bold;
          color: #fff;

          width: 110px;
          height: 90px;
          margin: 0 4px;

          border-radius: 8px;
          cursor: pointer;
          transition: opacity 0.2s ease;

          &:hover {
            opacity: 0.8;
          }
        }

        button:first-child {
          background-color: ${props => props.theme.colors.backgroundThird};
        }
        button:last-child {
          background-color: ${props => props.theme.colors.background};
        }
      }
    }

    @media (max-width: 425px) {
      .box {
        background-color: transparent;
      }
    }
  }
`;
