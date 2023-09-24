import { useQuery } from '@tanstack/react-query';
import { fetchCharacters } from '../../api';
import styled from 'styled-components';
import { Character, Top } from './components';
import { Helmet } from 'react-helmet';
import { FlexColStart, Loading } from '../../components';

const Home = () => {
  const { isLoading, data } = useQuery<ICharacter[]>({
    queryKey: ['characters'],
    queryFn: fetchCharacters,
  });
  return (
    <>
      <Helmet title="Disney Characters" />
      <Top />
      {isLoading ? (
        <Loading />
      ) : (
        <FlexColStart>
          <GridContainer>
            {data
              ?.slice(0, 100)
              .map((character) => (
                <Character character={character} key={character.id} />
              ))}
          </GridContainer>
        </FlexColStart>
      )}
    </>
  );
};

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 20px 30px;
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
