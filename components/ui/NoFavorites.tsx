import { Container, Image, Text } from '@nextui-org/react';

const NoFavorites = () => {
  const ContainerStyles = {
    display: 'flex',
    flexDirection: 'column',
    height: 'calc(100vh - 100px)',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  };

  return (
    <Container css={ContainerStyles}>
      <Text h1>No hay favoritos</Text>
      <Image
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/91.png"
        alt="addqw"
        width={250}
        height={250}
        css={{ opacity: '0.1' }}
      />
    </Container>
  );
};

export default NoFavorites;
