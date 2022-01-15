import styled from "styled-components";

export const Container = styled.div`
  .input-search {
    > div {
      position: absolute;
      top: 4.5rem;
      left: 0;
      right: 0;
      margin: 0 auto;
      
      transform: translateX(-50%);
      z-index: 10;

      display: flex;
      justify-content: center;

      width: 300px;
      padding: 1rem;
      background-color: ${props => props.theme.colors.backgroundSecondary};

      border-radius: 8px;

      opacity: 0;
      overflow: hidden;
      transform: translateY(-100px);
      transition: transform 0.3s ease 0s, opacity 0.4s ease 0s;

      input {
        font-size: 1rem;
        color: #fff;

        width: 100%;
        height: 30px;
        background-color: transparent;

        border: none;
        outline: none;
        border-bottom: 2px solid ${props => props.theme.colors.backgroundThird};
      }
      &.show-modal {
        opacity: 1;
        transform: translateY(-2px);
      }
    }
  }

  .overlay {
    position: fixed;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    cursor: pointer;
    overscroll-behavior: hidden;
    z-index: 8;
    opacity: 0;
    visibility: hidden;

    transition: all 0.34s ease-in-out;

    .overlay-content {
      height: 100%;
      overflow: hidden;
    }

    &.show-modal {
      opacity: 1;
      visibility: visible;
    }
  }
`;
