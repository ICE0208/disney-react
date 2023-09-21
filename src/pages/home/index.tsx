import { useQuery } from '@tanstack/react-query';
import { fetchCharacters } from '../../api';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Home = () => {
  const { isLoading, data } = useQuery<Character[]>({
    queryKey: ['characters'],
    queryFn: fetchCharacters,
  });
  return (
    <Container>
      {isLoading ? (
        <h1>Loading</h1>
      ) : (
        <GridContainer>
          {data?.slice(0, 30).map((character) => (
            <div key={character.id}>
              <Link to={`character/${character.id}`}>
                <h3>{character.name}</h3>
              </Link>
              <LazyLoadImage
                src={character.imageUrl}
                alt={character.name}
                loading="lazy"
                width="200"
                height="200"
                style={{ objectFit: 'cover' }}
              />
            </div>
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
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 50px 70px;
  margin: auto; // Add this line to center the container
  width: 100%;
  max-width: 1800px;
  padding: 10px 30px;
  box-sizing: border-box;
`;

interface Character {
  id: number;
  name: string;
  imageUrl?: string;
}

export default Home;
