import { useCallback } from 'react';
import styled from 'styled-components';

const Top = () => {
  const scrollOnTop = useCallback(() => {
    window.scroll({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  return <TopStyle onClick={scrollOnTop}>Top</TopStyle>;
};

const TopStyle = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: fixed;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  bottom: 16px;
  right: 16px;
  background-color: ${(props) => props.theme.hightlightColor};
  color: ${(props) => props.theme.mainTextColor};
  font-size: 16px;
  border: 2px solid ${(props) => props.theme.boxTextColor};
  box-sizing: border-box;
  cursor: pointer;
`;

export default Top;
