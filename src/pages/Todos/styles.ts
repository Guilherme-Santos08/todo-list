import styled from "styled-components";

export const Container = styled.div`
  margin: 6rem auto;
  max-width: 650px;
  padding: 0 1rem;

  .page {
    display: flex;
    align-items: center;
    h2 {
      margin-left: 1rem;
    }
  }

  .page__back {
    display: flex;
    align-items: center;
    color: #fff;
    
    background-color: ${props => props.theme.colors.backgroundSecondary};
    padding: .2rem;

    border-radius: 8px;
    cursor: pointer;

    transition: opacity .2s ease-in-out;

    &:hover {
      opacity: .8;
    }
  }

  ul {
    li + li {
      margin-top: 0.7rem;
    }
  }
`;
