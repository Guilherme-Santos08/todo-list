import styled from "styled-components";

export const Container = styled.div`
  padding: 1rem;
  width: 100vw;
  color: #000;

  > div {
    position: relative;

    max-width: 600px;
    height: 600px;
    margin: 2rem auto;
    padding: 2rem;

    background-color: #fff;
    border-radius: 18px;

    display: flex;
    flex-direction: column;
    align-items: center;

    h2 {
      margin: 2rem 0;
      color: #495057;
    }

    .illustration {
      max-width: 100px;

      img {
        width: 100%;
      }
    }

    .or {
      position: relative;
      color: #adb5bd;
      margin: 1rem 0;
      &::after {
        content: "";
        display: block;
        width: 110px;
        height: 1px;
        background-color: #ced4da;
        position: absolute;
        top: 10px;
        left: 22px;
      }
      &::before {
        content: "";
        display: block;
        width: 110px;
        height: 1px;
        background-color: #ced4da;
        position: absolute;
        top: 10px;
        right: 22px;
      }
    }

    form {
      width: 270px;

      .input {
        display: flex;
        flex-direction: column;
        input {
          font-size: 1rem;

          height: 34px;
          width: 100%;
          padding: 0 0.4rem;

          border: 1px solid #6c757d;
          border-radius: 4px;
          outline: none;

          &:focus {
            border: 1px solid #562fe2;
          }
        }
        label {
          font-size: 0.9rem;
          color: #7b88a3;
          margin-bottom: 0.2rem;
        }
      }

      .input + .input {
        margin-top: 1rem;
      }

      button {
        color: #fff;
        font-weight: bold;

        width: 100%;
        height: 38px;
        background-color: #562fe2;
        margin-top: 1rem;

        border-radius: 8px;
        border: none;
        transition: opacity 0.3s ease;
        cursor: pointer;
        &:hover {
          opacity: 0.9;
        }
      }
    }

    .btn-google {
      font-size: 0.9rem;

      width: 270px;
      height: 40px;
      background-color: #f9f9ff;

      display: flex;
      align-items: center;
      justify-content: center;

      border-radius: 8px;
      border: 1px solid #eeeefe;
      cursor: pointer;
      transition: opacity 0.2s ease;

      &:hover {
        opacity: 0.9;
      }

      span {
        margin-right: 0.5rem;
      }
    }

    p {
      position: absolute;
      bottom: .8rem;

      font-size: 0.9rem;
      color: #495057;
      a {
        color: #562fe2;
        font-weight: bold;
      }
    }
  }
`;
