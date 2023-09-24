import styled from 'styled-components';

const Header = () => (
  <Container>
    <Title>Disney Characters</Title>
  </Container>
);

export const HEADER_HEIGHT = 68;

const Container = styled.div`
  width: 100%;
  height: ${HEADER_HEIGHT}px;
  background-color: ${(props) => props.theme.headerColor};
  display: flex;
  justify-content: center;
  align-items: center;
  &::after {
    content: '';
    position: fixed;
    top: 0;
    width: 100%;
    height: 50vh;
    background-color: ${(props) =>
      props.theme.headerColor}; /* 더 내려갈 때 나타나는 배경 색상 (파란색) */
    z-index: -1; /* 페이지 내용 위에 나타나도록 설정 */
  }
`;

const Title = styled.div`
  color: white;
  font-size: 30px;
`;

export default Header;
