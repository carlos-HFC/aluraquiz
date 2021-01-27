import styled from "styled-components"

export const Button = styled.button`
  background-color: ${({theme})=>theme.colors.secondary};
  color: ${({theme})=>theme.colors.contrast};
  border-radius: ${({theme})=>theme.radius};
  border: 0;
  width: 100%;
  padding: 14px 16px;
  font-weight: bold;
  font-size: 14px;
  line-height: 1;
  text-transform: uppercase;
  outline: 0;
  transition: .3s;
  cursor: pointer;

  &:hover, &:focus {
    opacity: .7;
  }

  &:disabled {
    background-color: #979797;
    cursor: not-allowed
  }
`