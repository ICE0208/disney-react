import { useQuery } from '@tanstack/react-query';
import { Link, useLocation, useParams } from 'react-router-dom';
import { fetchDetail } from '../../api';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';

interface RouteState {
  state: {
    name: string;
  };
}

const Detail = () => {
  const { id } = useParams();
  const { state } = useLocation() as RouteState;
  console.log(state);

  const { isLoading, data, error } = useQuery<CharacterDetail>({
    queryKey: ['detail', id],
    queryFn: () => fetchDetail(id!),
    retry: false,
    refetchOnWindowFocus: false, // 창이 focus될 때 refetch
  });

  if (error) throw error;
  return (
    <>
      <Helmet>
        <title>{state?.name ?? (isLoading ? 'Loading' : data?.name)}</title>
      </Helmet>
      {isLoading ? (
        <h1>Loading</h1>
      ) : (
        <Container>
          <CharacterImage src={data?.imageUrl} />
          <CharacterName>{data?.name}</CharacterName>
          <FilmContainer>
            {data?.films?.map((film, idx) => (
              <FilmText key={`${id}_${idx}`}>{film}</FilmText>
            ))}
          </FilmContainer>
          <LinkArea>
            <Back to="/">&larr; &nbsp; Back</Back>
            <LinkSeperator />
            <More href={data?.sourceUrl} target="_blank">
              More &nbsp; &rarr;
            </More>
          </LinkArea>
        </Container>
      )}
    </>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
  background-color: #4580b7;
  padding: 34px;
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

const CharacterImage = styled(LazyLoadImage)`
  width: 260px;
  height: 260px;
  object-fit: cover;
  border-radius: 50%;
  margin-bottom: 20px;
`;

const CharacterName = styled.h1`
  padding: 20px;
  font-size: 32px;
  font-style: italic;
  color: whitesmoke;
  font-weight: bold;
  margin-bottom: 20px;
`;

const FilmContainer = styled.div`
  max-width: 600px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 56px;
`;

const FilmText = styled.span`
  background-color: whitesmoke;
  margin: 4px;
  display: inline-block;
  padding: 10px 10px;
  border-radius: 20px;
  justify-content: center;
  justify-self: center;
  font-size: 18px;
`;

const linkTextStyle = `
  color: whitesmoke;
  font-size: 18px;
`;

const Back = styled(Link)`
  ${linkTextStyle}
`;

const More = styled.a`
  ${linkTextStyle}
`;

const LinkSeperator = styled.div`
  width: 1px;
  height: 100%;
  background-color: whitesmoke;
`;

const LinkArea = styled.div`
  display: flex;
  align-items: center;
  height: 20px;
  gap: 34px;
`;

export default Detail;

interface CharacterDetail {
  id: number;
  films: string[];
  name: string;
  imageUrl: string;
  sourceUrl: string;
}
