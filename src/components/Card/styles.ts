import styled from "styled-components";

export const Container = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;

  padding: 1.3rem;
  background-color: ${props => props.theme.colors.backgroundSecondary};
  border-radius: 23px;

  flex: 1 2 192px;
  min-height: 195px;
  transition: all 0.4s ease;

  &:hover {
    transform: translateY(-9px);
  }

  .card__icon {
    > div {
      width: 50px;
      height: 50px;
      border-radius: 16px;
    }
  }

  .card__info {
    h3 {
      font-size: 1.3rem;
      color: ${props => props.theme.colors.cardHeadiling};
      margin-bottom: 0.8rem;
    }
    span {
      font-size: 0.9rem;
      color: ${props => props.theme.colors.cardParagraph};
    }
  }

  @media (max-width: 440px) {
    flex: 1 2 166px;
  }
  @media (max-width: 375px) {
    flex: 1 2 156px;
  }
`;
