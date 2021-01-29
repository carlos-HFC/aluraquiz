import styled from 'styled-components';

export function QuizLogo() {
  return (
    <Logo>
      <img src="https://seeklogo.net/wp-content/uploads/2014/10/nfl-logo-National-Football-League-400x400.png" alt="Logo da NFL" />
    </Logo>
  );
}

const Logo = styled.div`
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100px;
  }

  @media screen and (max-width: 500px) {
    margin: 0;
  }
`;