import styled from 'styled-components';
import { HEADER_HEIGHT } from '../header';

const FlexCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #4580b7;
  padding: 40px 80px;
  min-height: calc(100vh - ${HEADER_HEIGHT}px);
  box-sizing: border-box;
  &::after {
    content: '';
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 50vh;
    background-color: #4580b7; /* 더 내려갈 때 나타나는 배경 색상 (파란색) */
    z-index: -2; /* 페이지 내용 위에 나타나도록 설정 */
  }
`;

export default FlexCenter;