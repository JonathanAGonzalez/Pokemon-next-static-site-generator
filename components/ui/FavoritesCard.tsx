import { Card, Image, Text } from '@nextui-org/react';
import { FC } from 'react';

interface Props {
  id: number;
  onFavoritesClicked: Function;
  pokemon: {
    name: string;
    id: number;
  };
}

const FavoritesCard: FC<Props> = ({ pokemon, onFavoritesClicked }) => {
  return (
    <Card
      hoverable
      clickable
      css={{ padding: 10 }}
      onClick={() => onFavoritesClicked(pokemon.name)}
    >
      <Text># {pokemon.id}</Text>
      <Image
        width="100%"
        height={140}
        alt="asd"
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
      />
    </Card>
  );
};

export default FavoritesCard;
