import styled from "styled-components"

const InputBase = styled.input`
  width: 100%;
  padding: 15px;
  font-size: 14px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.contrast};
  background-color: ${({ theme }) => theme.colors.bgColor};
  border-radius: ${({ theme }) => theme.radius};
  outline: 0;
  background-color: #eee1;
  margin-bottom: 25px;

  &::placeholder {
    color: #eee;
    font-style: italic
  }
`

export function Input(props) {
  return (
    <div>
      <InputBase {...props} />
    </div>
  )
}