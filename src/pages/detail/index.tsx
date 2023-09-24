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
    retry: 1,
    refetchOnWindowFocus: false, // 창이 focus될 때 refetch
  });

  if (error && state === null) throw error;
  return (
    <>
      <Helmet>
        <title>{state?.name ?? (isLoading ? 'Loading' : data?.name)}</title>
      </Helmet>
      <FlexColStart>
        <CharacterImage
          src={
            state?.imageUrl ??
            data?.imageUrl ??
            'https://static.wikia.nocookie.net/disney/images/not.jpg'
          }
        />
        <CharacterName>{state?.name ?? data?.name ?? 'Loading'}</CharacterName>
        <FilmContainer>
          {data?.films?.map((film, idx) => (
            <FilmText key={`${id}_${idx}`}>{film}</FilmText>
          )) ?? (
            <FilmLoadingStateText>
              {error ? 'Not Found :(' : 'Loading...'}
            </FilmLoadingStateText>
          )}
        </FilmContainer>
        <LinkArea>
          <Back to="/">&larr; &nbsp; Back</Back>
          <LinkSeperator />
          <More
            href={data?.sourceUrl}
            target="_blank"
            $canClick={!isLoading && !error}
          >
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
  background-color: ${(props) => props.theme.boxBgColor};
`;

const CharacterName = styled.h1`
  padding: 20px;
  font-size: 32px;
  font-style: italic;
  color: ${(props) => props.theme.mainTextColor};
  font-weight: bold;
  margin-bottom: 20px;
  text-align: center;
`;

const FilmContainer = styled.div`
  max-width: 600px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 56px;
  min-height: 150px;
  align-items: flex-start;
  align-content: flex-start;
  row-gap: 1px;
`;

const FilmText = styled.span`
  background-color: ${(props) => props.theme.boxBgColor};
  color: ${(props) => props.theme.boxTextColor};
  margin: 4px;
  display: inline-block;
  padding: 12px 12px;
  border-radius: 20px;
  justify-content: center;
  justify-self: center;
  font-size: 18px;
`;

const FilmLoadingStateText = styled.div`
  color: ${(props) => props.theme.mainTextColor};
  font-size: 20px;
`;

const linkTextStyle = `
  color: whitesmoke;
  font-size: 18px;
`;

export const Back = styled(Link).attrs({ tabIndex: -1 })`
  ${linkTextStyle}
  color: ${(props) => props.theme.mainTextColor};
`;

const More = styled.a.attrs({ tabIndex: -1 })<{ $canClick: boolean }>`
  ${linkTextStyle};
  color: ${(props) => props.theme.mainTextColor};
  pointer-events: ${(props) => (props.$canClick ? 'auto' : 'none')};
`;

const LinkSeperator = styled.div`
  width: 1px;
  height: 100%;
  background-color: ${(props) => props.theme.mainTextColor};
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
