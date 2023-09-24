import { Link } from 'react-router-dom';
import { ICharacter } from '../..';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import styled from 'styled-components';

const Character = ({ character }: CharacterProps) => {
  return (
    <Link
      to={`character/${character.id}`}
      state={{ name: character.name, imageUrl: character.imageUrl }}
    >
      <Container>
        <LazyLoadImage
          src={
            character.imageUrl ??
            'https://static.wikia.nocookie.net/disney/images/not.jpg'
          }
          alt={character.name}
          loading="lazy"
          width="200"
          height="200"
          style={{ objectFit: 'cover' }}
        />
        <p style={{ padding: '4px' }}>{character.name}</p>
      </Container>
    </Link>
  );
};

const ANIMATION_TIME = 0.2;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  border-radius: 20px;
  padding: 20px;
  transition: all ${ANIMATION_TIME}s ease-in-out;
  a {
    width: 100%;
  }
  p {
    width: 100%;
    color: ${(props) => props.theme.mainTextColor};
    overflow: hidden;
    font-style: italic;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-align: center;
    font-size: 24px;
    transition: all ${ANIMATION_TIME}s ease-in-out;
  }
  img {
    border-radius: 50%;
    border: 4px solid transparent;
    box-sizing: content-box;
    margin-bottom: 20px;
    transition: all ${ANIMATION_TIME}s ease-in-out;
  }
  &:hover {
    background-color: ${(props) => props.theme.hoverBgColor};
    p {
      color: ${(props) => props.theme.hoverTextColor};
    }
    img {
      border-color: black;
    }
  }
`;

interface CharacterProps {
  character: ICharacter;
}

export default Character;
