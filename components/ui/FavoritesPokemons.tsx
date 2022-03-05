import { Grid } from '@nextui-org/react';
import { useRouter } from 'next/router';
import { FC } from 'react';
import FavoritesCard from './FavoritesCard';

interface Props {
  favoritePokemons: number[];
}

const FavoritesPokemons: FC<Props> = ({ favoritePokemons }) => {
  const router = useRouter();

  const onFavoritesClicked = (id: number) => {
    router.push(`/pokemon/${id}`);
  };

  return (
    <Grid.Container gap={2} justify="flex-start">
      {favoritePokemons.map((id: number) => (
        <Grid key={id} xs={6} sm={3} md={2} xl={1}>
          <FavoritesCard id={id} onFavoritesClicked={onFavoritesClicked} />
        </Grid>
      ))}
    </Grid.Container>
  );
};

export default FavoritesPokemons;
