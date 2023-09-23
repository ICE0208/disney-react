import { useQuery } from '@tanstack/react-query';
import { Link, useLocation, useParams } from 'react-router-dom';
import { fetchDetail } from '../../api';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { FlexColStart } from '../../components';

interface RouteState {
  name: string;
  imageUrl?: string;
}

const Detail = () => {
  const { id } = useParams();
  const state = useLocation().state as RouteState;
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
      <FlexColStart>
        <CharacterImage src={state?.imageUrl ?? data?.imageUrl} />
        <CharacterName>{state?.name ?? data?.name ?? 'Loading'}</CharacterName>
        <FilmContainer>
          {data?.films?.map((film, idx) => (
            <FilmText key={`${id}_${idx}`}>{film}</FilmText>
          )) ?? <FilmLoadingText>Loading...</FilmLoadingText>}
        </FilmContainer>
        <LinkArea>
          <Back to="/">&larr; &nbsp; Back</Back>
          <LinkSeperator />
          <More href={data?.sourceUrl} target="_blank" $canClick={!isLoading}>
            More &nbsp; &rarr;
          </More>
        </LinkArea>
      </FlexColStart>
    </>
  );
};

const CharacterImage = styled(LazyLoadImage)`
  width: 260px;
  height: 260px;
  object-fit: cover;
  border-radius: 50%;
  margin-top: 36px;
  margin-bottom: 20px;
  background-color: #e5e5e5;
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
  min-height: 150px;
  align-items: flex-start;
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

const FilmLoadingText = styled.div`
  color: whitesmoke;
  font-size: 20px;
`;

const linkTextStyle = `
  color: whitesmoke;
  font-size: 18px;
`;

const Back = styled(Link).attrs({ tabIndex: -1 })`
  ${linkTextStyle}
`;

const More = styled.a.attrs({ tabIndex: -1 })<{ $canClick: boolean }>`
  ${linkTextStyle};
  pointer-events: ${(props) => (props.$canClick ? 'auto' : 'none')};
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
