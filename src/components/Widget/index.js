import styled from "styled-components"

export const Widget = styled.section`
  margin: 24px 0;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.bgColor}aa;
  border-radius: ${({ theme }) => theme.radius};
  overflow: hidden;

  h1,h2,h3 {
    font-size: 16px;
    font-weight: 700;
    line-height: 1.5;
    margin-bottom: 0;
  }

  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 1;
  }
`;

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

  p {
    text-align: justify;
    line-height: 1.5;
    hyphens: manual;
  }
`;

Widget.Header = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 18px 32px;
  background-color: ${({ theme }) => theme.colors.primary};
  
  * {
    margin: 0;
  }
`;

Widget.Topic = styled.a`
  outline: 0;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.contrast};
  border-radius: ${({ theme }) => theme.radius};
  background: ${({ theme }) => `${theme.colors.primary}50`};
  padding: 10px 15px;
  margin-bottom: 9px;
  cursor: pointer;
  transition: 0.3s;
  display: block;

  &:hover, &:focus{
    opacity: 0.7;
  }
`