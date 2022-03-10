import { Grid } from '@nextui-org/react';
import { useRouter } from 'next/router';
import { FC } from 'react';
import { NextPage } from 'next';
import FavoritesCard from './FavoritesCard';

interface Props {
  favoritePokemons: [
    {
      id: number;
      name: string;
    }
  ];
}

const FavoritesPokemons: NextPage<Props> = ({ favoritePokemons }) => {
  const router = useRouter();

  const onFavoritesClicked = (name: number) => {
    router.push(`/pokemon/${name}`);
  };

  return (
    <Grid.Container gap={2} justify="flex-start">
      {favoritePokemons.map((pokemon) => (
        <Grid key={pokemon.id} xs={6} sm={3} md={2} xl={1}>
          <FavoritesCard
            pokemon={pokemon}
            onFavoritesClicked={onFavoritesClicked}
          />
        </Grid>
      ))}
    </Grid.Container>
  );
};

export default FavoritesPokemons;
