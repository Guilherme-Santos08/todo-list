import styled from "styled-components";

export const Container = styled.li`
  display: flex;
  align-items: center;

  width: 100%;
  height: 50px;
  background-color: ${(props) => props.theme.colors.backgroundSecondary};

  border-radius: 16px;

  .task {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    padding: 0 1rem;
    .task__input {
      h3 {
        font-size: 1rem;
        font-weight: normal;
        margin-left: 2.5rem;

        max-width: 493px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        cursor: pointer;
      }

      input {
        display: none;

        &:checked ~ .checkmark {
          background-color: ${(props) => props.theme.colors.backgroundThird};
        }

        &:checked ~ .checkmark:after {
          display: block;
        }
      }
      .container {
        position: relative;
        cursor: pointer;
        &:hover input ~ .checkmark {
          /* background-color: #ccc; */
        }
      }
      .checkmark {
        position: absolute;
        top: 0px;
        left: 0;
        height: 20px;
        width: 20px;
        background-color: #eee;
        border-radius: 6px;
        border: 3px solid ${(props) => props.theme.colors.backgroundThird};

        &:after {
          content: "";
          position: absolute;
          display: none;
          left: 4px;
          top: 1px;
          width: 3px;
          height: 8px;
          border: solid #fff;
          border-width: 0 3px 3px 0;
          transform: rotate(45deg);
        }
      }
    }

    .task__delete {
      color: #fff;
      background-color: transparent;
      cursor: pointer;
      border: none;
    }
  }

  @media (max-width: 475px) {
    .task {
      .task__input {
        h3 {
          max-width: 332px;
        }
      }
    }
  }

  @media (max-width: 375px) {
    .task {
      .task__input {
        h3 {
          max-width: 227px;
        }
      }
    }
  }
`;
