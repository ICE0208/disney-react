import { useCallback } from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { isDarkAtom } from '../../atoms';
import { BiSolidMoon, BiSolidSun } from 'react-icons/bi';

const Header = () => {
  const [isDark, setIsDark] = useRecoilState(isDarkAtom);
  const toggleDark = useCallback(() => {
    setIsDark((prev) => !prev);
  }, [setIsDark]);

  return (
    <Container>
      <Title>Disney Characters</Title>
      <DarkBtn onClick={toggleDark}>
        {isDark ? <BiSolidSun /> : <BiSolidMoon />}
      </DarkBtn>
    </Container>
  );
};

export const HEADER_HEIGHT = 68;

const Container = styled.div`
  position: relative;
  width: 100%;
  height: ${HEADER_HEIGHT}px;
  background-color: ${(props) => props.theme.hightlightColor};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  box-shadow: #2b2b2b 0px -20px 20px 20px;
  &::after {
    content: '';
    position: fixed;
    top: 0;
    width: 100%;
    height: 50vh;
    background-color: ${(props) =>
      props.theme
        .hightlightColor}; /* 더 내려갈 때 나타나는 배경 색상 (파란색) */
    z-index: -1; /* 페이지 내용 위에 나타나도록 설정 */
  }
`;

const Title = styled.div`
  color: ${(props) => props.theme.mainTextColor};
  font-size: 30px;
`;

const DarkBtn = styled.button`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  right: 0px;
  top: 0px;
  width: 50px;
  height: 100%;
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 22px;
  text-align: center;
  color: ${(props) => props.theme.mainTextColor};
`;

export default Header;
