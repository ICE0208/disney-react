import styled, { keyframes } from 'styled-components';
import { FlexColStart } from '..';

const Loading = () => (
  <FlexColStart $center>
    <Circle />
    <Text>Loading...</Text>
  </FlexColStart>
);

const circleAnimation = keyframes`
    0%{
        transform: rotateY(0deg) rotateZ(45deg)
    }
    50%{
        transform: rotateY(180deg) rotateZ(45deg)
    }
    100%{
        transform: rotateY(360deg) rotateZ(45deg)
    }
`;
const Text = styled.h1`
  color: ${(props) => props.theme.mainTextColor};
  font-size: 80px;
  margin-top: 36px;
`;

const Circle = styled.div`
  width: 42px;
  height: 42px;
  border: 4px solid #f3f3f3;
  animation: ${circleAnimation} 1s linear infinite;
`;

export default Loading;
