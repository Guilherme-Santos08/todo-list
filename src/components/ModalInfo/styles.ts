import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  right: 0.9rem;
  top: 4.8rem;

  background-color: ${props => props.theme.colors.backgroundSecondary};
  width: 200px;
  border-radius: 8px;

  box-shadow: 5px 5px 5px 1px rgba(0, 0, 0, 0.18);

  .options {
    display: flex;
    flex-direction: column;
    position: relative;
    z-index: 11;

    button {
      display: flex;
      align-items: center;
      flex-direction: row-reverse;
      justify-content: flex-end;

      font-size: 1rem;
      text-align: start;
      color: #fff;

      background-color: ${props => props.theme.colors.backgroundSecondary};
      padding: 1rem;

      cursor: pointer;
      border: none;
      border-radius: 3px;
      transition: background 0.4 ease-in-out;

      &:hover {
        background-color: #242424;
      }

      span {
        display: flex;
        font-size: 1rem;
        font-weight: normal;
      }

      > div {
        margin-right: 18px;
        display: flex;
        justify-content: center;

        color: ${props => props.theme.colors.backgroundThird};
      }
    }
    .delete-accont {
      > div {
        color: rgb(221, 85, 84);
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
    display: block;
    overscroll-behavior: hidden;
    z-index: 10;

    .overlay-content {
      height: 100%;
      overflow: hidden;
    }
  }

  &:before {
    content: "";
    position: absolute;
    left: 79%;
    top: -17%;
    width: 0;
    height: 0;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    border-bottom: 20px solid ${props => props.theme.colors.backgroundSecondary};
    clear: both;
  }
`;
