import { Layout } from '../../components/layouts';
import NoFavorites from '../../components/ui/NoFavorites';
import { pokemons } from '../../utils';
import { useEffect, useState } from 'react';
import FavoritesPokemons from '../../components/ui/FavoritesPokemons';

const Favorites = () => {
  const [favoritePokemons, setFavoritePokemons] = useState<any>([]);

  useEffect(() => {
    setFavoritePokemons(pokemons());
  }, []);

  return (
    <Layout title="Favoritos">
      {favoritePokemons.length > 0 ? (
        <FavoritesPokemons favoritePokemons={favoritePokemons} />
      ) : (
        <NoFavorites />
      )}
    </Layout>
  );
};

export default Favorites;
