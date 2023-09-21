import { useQuery } from '@tanstack/react-query';
import { fetchCharacters } from '../../api';
import styled from 'styled-components';
import { Character } from './components';

const Home = () => {
  const { isLoading, data } = useQuery<ICharacter[]>({
    queryKey: ['characters'],
    queryFn: fetchCharacters,
  });
  return (
    <Container>
      {isLoading ? (
        <h1>Loading</h1>
      ) : (
        <GridContainer>
          {data
            ?.slice(0, 30)
            .map((character) => (
              <Character character={character} key={character.id} />
            ))}
        </GridContainer>
      )}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #4580b7;
  min-height: 100vh;
  padding: 80px;
  padding-top: 0px;
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

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 50px 70px;
  margin: auto; // Add this line to center the container
  width: 100%;
  max-width: 1800px;
  padding: 60px 30px;
  box-sizing: border-box;
`;

export interface ICharacter {
  id: number;
  name: string;
  imageUrl?: string;
}

export default Home;
