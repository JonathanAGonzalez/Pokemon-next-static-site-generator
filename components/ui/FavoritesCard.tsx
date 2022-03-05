import { Card, Image, Text } from '@nextui-org/react';
import { FC } from 'react';

interface Props {
  id: number;
  onFavoritesClicked: Function;
}

const FavoritesCard: FC<Props> = ({ id, onFavoritesClicked }) => {
  return (
    <Card
      hoverable
      clickable
      css={{ padding: 10 }}
      onClick={() => onFavoritesClicked(id)}
    >
      <Text># {id}</Text>
      <Image
        width="100%"
        height={140}
        alt="asd"
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
      />
    </Card>
  );
};

export default FavoritesCard;
