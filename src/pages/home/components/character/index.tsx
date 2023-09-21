import { Link } from 'react-router-dom';
import { ICharacter } from '../..';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import styled from 'styled-components';

const Character = ({ character }: CharacterProps) => {
  return (
    <Container>
      <LazyLoadImage
        src={character.imageUrl}
        alt={character.name}
        loading="lazy"
        width="200"
        height="200"
        style={{ objectFit: 'cover' }}
      />
      <Link to={`character/${character.id}`}>
        <p>{character.name}</p>
      </Link>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 240px;
  margin-bottom: 10px;
  a {
    width: 100%;
  }
  p {
    color: whitesmoke;
    font-weight: bold;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-align: center;
    font-size: 22px;
  }
  img {
    border-radius: 50%;
  }
`;

interface CharacterProps {
  character: ICharacter;
}

export default Character;
