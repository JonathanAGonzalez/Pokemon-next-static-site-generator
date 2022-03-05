import { useState } from 'react';
import { NextPage, GetStaticProps, GetStaticPaths } from 'next';
import { Card, Grid, Image, Text, Button, Container } from '@nextui-org/react';
import confetti from 'canvas-confetti';
import { Pokemon, PokemonListResponse } from '../../interfaces';
import { Layout } from '../../components/layouts';
import { onToggleFavorite, existInFavorites } from '../../utils';
import pokeApi from '../../api';
interface Props {
  pokemon: Pokemon;
}

const PokemonByName: NextPage<Props> = ({ pokemon }) => {
  const pokeInLocal = existInFavorites(pokemon.id);
  const [isInFavorites, setIsInFavorites] = useState(pokeInLocal);

  const handleToggleFavorite = () => {
    onToggleFavorite(pokemon.id);
    setIsInFavorites(!isInFavorites);
    if (isInFavorites) return;

    confetti({
      zIndex: 999,
      particleCount: 100,
      spread: 160,
      angle: -100,
      origin: {
        x: 1,
        y: 0,
      },
    });
  };

  return (
    <Layout title={`Pokémon | ${pokemon.name}`}>
      <Grid.Container css={{ marginTop: '5px' }} gap={2}>
        <Grid xs={12} sm={4}>
          <Card hoverable css={{ padding: '30px' }}>
            <Card.Body>
              <Image
                src={pokemon.sprites.other.dream_world.front_default}
                alt={pokemon.name}
                width="100%"
                height={200}
                css={{ objectFit: 'scale-down' }}
              />
            </Card.Body>
          </Card>
        </Grid>

        <Grid xs={12} sm={8}>
          <Card>
            <Card.Header
              css={{
                display: 'flex',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
              }}
            >
              <Text h1 transform="capitalize">
                {pokemon.name}
              </Text>
              <Button
                color="gradient"
                ghost={!isInFavorites && true}
                onClick={handleToggleFavorite}
              >
                {isInFavorites ? 'Remove from favorites' : 'Add to favorites'}
              </Button>
            </Card.Header>

            <Card.Body>
              <Text size={30}>Sprites:</Text>
              <Container display="flex" direction="row" justify="space-around">
                <Image
                  src={pokemon.sprites.front_default}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.back_default}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.front_shiny}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.back_shiny}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
              </Container>
            </Card.Body>
          </Card>
        </Grid>
      </Grid.Container>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { name } = params as { name: string };

  const { data } = await pokeApi.get<Pokemon>(`/pokemon/${name}`);

  return {
    props: {
      pokemon: data,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const { data: pokemons } = await pokeApi.get(`/pokemon?limit=151`);

  const namesPokemons: string[] = pokemons.results.map(({ name }: any) => ({
    params: {
      name,
    },
  }));

  return {
    paths: namesPokemons,
    fallback: false,
  };
};

export default PokemonByName;
