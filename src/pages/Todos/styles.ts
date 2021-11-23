import styled from "styled-components";

export const Container = styled.div`
  margin: 6rem auto;
  max-width: 650px;
  padding: 0 1rem;

  ul {
    li + li {
      margin-top: .7rem;
    }
  }
`;
