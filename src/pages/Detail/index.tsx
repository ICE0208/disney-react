import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { fetchDetail } from '../../api';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Detail = () => {
  const { id } = useParams();
  const { isLoading, data } = useQuery<CharacterDetail>({
    queryKey: ['detail', id],
    queryFn: () => fetchDetail(id!),
  });
  return (
    <div>
      {isLoading ? (
        <h1>Loading</h1>
      ) : (
        <div>
          <h1>{data?.name}</h1>
          <LazyLoadImage src={data?.imageUrl} />
          <ul>
            {data?.films?.map((film, idx) => (
              <li key={`${id}_${idx}`}>{film}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Detail;

interface CharacterDetail {
  id: number;
  films: string[];
  name: string;
  imageUrl: string;
  sourceUrl: string;
}
