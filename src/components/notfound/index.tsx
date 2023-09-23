import styled from 'styled-components';
import { FlexColStart } from '..';
import { Back } from '../../pages/detail';

const NotFound = () => {
  return (
    <FlexColStart $center>
      <NotFoundText>Not Found :(</NotFoundText>
      <div style={{ margin: '20px' }}></div>
      <Back to="/">&larr; &nbsp; Back</Back>
    </FlexColStart>
  );
};

const NotFoundText = styled.div`
  color: whitesmoke;
  font-size: 52px;
`;

export default NotFound;
