import { useQuery } from '@tanstack/react-query';
import { fetchCharacters } from '../../api';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Home = () => {
  const { isLoading, data } = useQuery<Character[]>({
    queryKey: ['characters'],
    queryFn: fetchCharacters,
  });

  return (
    <div>
      {isLoading ? (
        <h1>Loading</h1>
      ) : (
        <div>
          {data?.map((character) => (
            <div key={character.id}>
              <h3>{character.name}</h3>
              <LazyLoadImage
                src={character.imageUrl}
                alt={character.name}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

interface Character {
  id: number;
  name: string;
  imageUrl?: string;
}

export default Home;
