import { useQuery } from '@tanstack/react-query';
import { fetchCharacters } from '../../api';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';

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
          {data?.slice(0, 30).map((character) => (
            <div key={character.id}>
              <Link to={`character/${character.id}`}>
                <h3>{character.name}</h3>
              </Link>
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
