import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  right: 0.9rem;
  top: 4.1rem;

  background-color: ${props => props.theme.colors.backgroundSecondary};
  width: 200px;

  padding: 1rem;
  border-radius: 8px;
  box-shadow: 5px 5px 5px 1px rgba(0, 0, 0, 0.18);

  > div {
    display: flex;
    flex-direction: column;

    button {
      font-size: 1rem;
      text-align: start;
      color: #fff;
      background-color: transparent;
      cursor: pointer;
      border: none;
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
