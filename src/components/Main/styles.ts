import styled from "styled-components";

export const Container = styled.main`
  margin: 9rem auto;
  max-width: 650px;
  padding: 0 1rem;

  .name-section {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 1.1rem;

    span {
      font-weight: bold;
      font-size: 1.4rem;
      /* color: ${props => props.theme.colors.backgroundSecondary}; */
      color: #ffffe2;
      cursor: pointer;
    }
  }

  .choice {
    margin-top: 5rem;
    button {
      font-weight: bold;
      color: ${props => props.theme.colors.textHeadiline};
      
      padding: 0.8rem 1rem;
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

  .cards {
    display: flex;
    gap: 15px;
    flex-wrap: wrap;
    margin-top: 3rem;
  }
`;
