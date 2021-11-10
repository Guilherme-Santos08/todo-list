import styled from "styled-components";

export const Container = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.7rem;
  
  /* min-width: 199px; */
  /* max-width: 199px; */
  flex: 0 2 199px;
  min-height: 98px;
  background-color: transparent;
  
  border: 2px solid ${props => props.theme.colors.backgroundSecondary};
  border-radius: 23px;

  transition: all 0.4s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-4px);
    opacity: 0.9;
  }

  @media (max-width: 440px) {
    flex: 0 2 166px;
  }
`;
