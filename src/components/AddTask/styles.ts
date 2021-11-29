import styled from "styled-components";

export const Container = styled.div`
display: flex;
align-items: center;

position: relative;
margin: 2rem 0;

padding: .4rem .9rem;
border: 1px solid ${props => props.theme.colors.backgroundSecondary};
border-radius: 16px;

label{
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

input {
  font-size: 1rem;
  color: #fff;
  padding: 0 .3rem;

  width: 100%;
  height: 36px;
  margin-left: 2.3rem;

  background-color: transparent;
  border: none;
  outline: none;

  &::placeholder {
    /* color: #ffff; */
  }
}

.add-task {
  display: flex;
  align-items: center;
  color: #fff;

  padding: 0.4rem;
  background-color: ${props => props.theme.colors.backgroundThird};

  position: absolute;
  z-index: 0;

  border-radius: 10px;
  cursor: pointer;
  border: none;
}

`