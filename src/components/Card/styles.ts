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
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    .card__icon--more {
      span {
        font-size: 1rem;
        font-weight: bold;
      }
    }
    .card__icon--delete {
      display: flex;
      align-items: center;
      color: #fff;

      opacity: 0;
      visibility: hidden;

      position: absolute;
      top: -10px;
      right: -6px;

      font-size: .85rem;
      padding: .4rem;

      background-color: ${props => props.theme.colors.background};
      border-radius: 12px;
      
      border: none;
      cursor: pointer;
      transition: opacity .4s ease;

      &.show-delete {
        opacity: 1;
        visibility: visible;
      }

      &:hover {
        opacity: .6;
      }
      svg {
        margin-right: .3rem;
      }
    }
    .card__icon--color {
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
