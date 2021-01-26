import styled from "styled-components"

export const Widget = styled.div`
  margin-top: 24px;
  margin-bottom: 24px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.bgColor};
  border-radius: ${({ theme }) => theme.radius};
  overflow: hidden;

  h1,h2,h3 {
    font-size: 16px;
    font-weight: 700;
    line-height: 1;
    margin-bottom: 0;
  }

  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 1;
  }
`

Widget.Content = styled.div`
  padding: 24px 32px 32px 32px;

  &>*:first-child {
    margin-top: 0;
  }
  &>*:last-child {
    margin-bottom: 0;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  input {
    width: 100%;
    padding: 6px;
  }

  button {
    background-color: ${({ theme }) => theme.colors.secondary};
    border-radius: ${({ theme }) => theme.radius};
    color: white;
    width: 100%;
    padding: 8px;
    margin-top: 8px;
    cursor: pointer;

    &:disabled  {
      opacity: 0.8;
      cursor: not-allowed;
    }
  }
`

Widget.Header = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 18px 32px;
  background-color: ${({ theme }) => theme.colors.primary};

  * {
    margin: 0;
  }
`