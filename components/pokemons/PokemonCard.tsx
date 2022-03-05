import { FC } from 'react';
import { SmallPokemon } from '../../interfaces/pokemon-list';
import { Button, Card, Col, Grid, Row, Text } from '@nextui-org/react';
import { useRouter } from 'next/router';

interface Props {
  pokemons: SmallPokemon[];
}

const PokemonCard: FC<Props> = ({ pokemons }) => {
  const router = useRouter();

  const onClick = (id: number) => {
    router.push(`/pokemon/${id}`);
  };

  return (
    <Grid.Container gap={2} justify="flex-start">
      {pokemons.map(({ id, img, name }) => (
        <Grid xs={12} sm={6} md={2} key={id} justify="center">
          <Card
            cover
            css={{ w: '100%', p: 0 }}
            hoverable
            clickable
            onClick={() => onClick(id)}
          >
            <Card.Header
              css={{
                position: 'absolute',
                zIndex: 1,
                top: 5,
              }}
            >
              <Col>
                <Text
                  size={12}
                  weight="bold"
                  transform="uppercase"
                  color="#9E9E9E"
                >
                  #{id}
                </Text>
              </Col>
            </Card.Header>
            <Card.Body>
              <Card.Image
                src={img}
                height={320}
                width="100%"
                alt={name}
                objectFit="scale-down"
              />
            </Card.Body>
            <Card.Footer
              blur
              css={{
                position: 'absolute',
                bgBlur: '#0f1114',
                borderTop: '$borderWeights$light solid $gray700',
                bottom: 0,
                zIndex: 1,
              }}
            >
              <Row>
                <Col>
                  <Row>
                    <Col css={{ pl: 10 }}>
                      <Text color="#d1d1d1" size={12}>
                        Pokémon:
                      </Text>
                      <Text color="#d1d1d1" size={16}>
                        {name}
                      </Text>
                    </Col>
                  </Row>
                </Col>
                <Col>
                  <Row justify="flex-end">
                    <Button
                      flat
                      auto
                      rounded
                      css={{ color: '#94f9f0', bg: '#94f9f026' }}
                      onClick={() => onClick(id)}
                    >
                      <Text
                        css={{ color: 'inherit' }}
                        size={12}
                        weight="bold"
                        transform="uppercase"
                      >
                        See more
                      </Text>
                    </Button>
                  </Row>
                </Col>
              </Row>
            </Card.Footer>
          </Card>
        </Grid>
      ))}
    </Grid.Container>
  );
};

export default PokemonCard;
