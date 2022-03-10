const onToggleFavorite = (pokemon: any) => {
  let favorites = JSON.parse(localStorage.getItem('Favorites') || '[]');

  const existInLocal = favorites.some((poke: any) => poke.id === pokemon.id);

  if (existInLocal) {
    const filter = favorites.filter((poke: any) => poke.id !== pokemon.id);
    localStorage.setItem('Favorites', JSON.stringify(filter));
    return;
  } else {
    favorites.push(pokemon);
  }
  localStorage.setItem('Favorites', JSON.stringify(favorites));
};

const existInFavorites = (idFav: number) => {
  if (typeof window === 'undefined') return false;
  const favorites = JSON.parse(localStorage.getItem('Favorites') || '[]');

  return favorites.some((pokemon: any) => pokemon.id === idFav);
};

const pokemons = () => {
  return JSON.parse(localStorage.getItem('Favorites') || '[]');
};

export { onToggleFavorite, existInFavorites, pokemons };
