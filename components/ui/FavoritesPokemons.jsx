import { Grid } from '@nextui-org/react';
import { useRouter } from 'next/router';
import { NextPage } from 'next';
import FavoritesCard from './FavoritesCard';

const FavoritesPokemons = ({ favoritePokemons }) => {
  const router = useRouter();

  const onFavoritesClicked = (name) => {
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
