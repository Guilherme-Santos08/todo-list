import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 100vh;

  padding: 3rem;

  h1 {
    color: #b0b5bb;
    line-height: 40px;
    font-size: 1.8rem;
    margin-bottom: 2rem;
  }

  a {
    color: #fff;
    
    margin-bottom: 4rem;
    padding: 1rem;
    background-color: #6C63FF;

    border-radius: 8px;
  }

  img {
    max-width: 60%;
  }

  .help {
    max-width: 600px;
  }

  @media(max-width: 1024px) {
    flex-direction: column;
    text-align: center;
    
    img {
    }
  }
  @media(max-width: 425px) {
    h1 {
      font-size: 1.2rem;
      line-height: 28px
    }

    img {
      max-width: 100%;
    }

    a {
      padding: 0.8rem;
    }
  }
`;
