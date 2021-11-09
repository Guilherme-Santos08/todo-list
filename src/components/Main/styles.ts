import styled from "styled-components";

export const Container = styled.main`
  margin: 2rem auto;
  max-width: 650px;
  padding: 0 1rem;

  .name-section {
    display: flex;
    align-items: center;
    justify-content: space-between;

    span {
      font-weight: bold;
      font-size: 1.8rem;
      color: ${props => props.theme.colors.backgroundSecondary};
      cursor: pointer;
    }
  }

  .choice {
    margin-top: 5rem;
    button {
      font-weight: bold;
      color: ${props => props.theme.colors.textHeadiline};
      
      padding: 0.6rem 1.4rem;
      background-color: ${props => props.theme.colors.backgroundSecondary};
      
      border-radius: 8px;
      border: 2px solid ${props => props.theme.colors.backgroundSecondary};
      cursor: pointer;

      transition: opacity .2s ease-in-out;

      & + button {
        margin-left: 1.2rem;
      }
      &:hover {
        opacity: .7;
      }
    }
  }
`;
