const onToggleFavorite = (id: number) => {
  let favorites: number[] = JSON.parse(
    localStorage.getItem('Favorites') || '[]'
  );

  if (favorites.includes(id)) {
    favorites = favorites.filter((fav) => fav !== id);
  } else {
    favorites.push(id);
  }

  localStorage.setItem('Favorites', JSON.stringify(favorites));
};

const existInFavorites = (id: number) => {
  if (typeof window === 'undefined') return false;

  const favorites: number[] = JSON.parse(
    localStorage.getItem('Favorites') || '[]'
  );

  return favorites.includes(id);
};

const pokemons = (): number[] => {
  return JSON.parse(localStorage.getItem('Favorites') || '[]');
};

export { onToggleFavorite, existInFavorites, pokemons };
