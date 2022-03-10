import { Container, Text, useTheme } from '@nextui-org/react';
import NextLink from 'next/link';
import { Link, Image } from '@nextui-org/react';
import { useState, useEffect } from 'react';

export const Navbar = () => {
  const { theme } = useTheme();
  const [favorites, setFavorites] = useState([]);
  const existInLocal =
    (typeof window !== 'undefined' && localStorage.getItem('Favorites')) ||
    '[]';

  const styles = {
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '1rem 1.2rem',
    backgroundColor: theme?.colors.gray900.value,
  };

  useEffect(() => {
    setFavorites(JSON.parse(existInLocal));
  }, [existInLocal]);

  return (
    <div style={styles}>
      <NextLink href="/" passHref>
        <Link>
          <Image
            src="/images/logo.png"
            alt="Icono de la aplicación"
            width={150}
            height={60}
          />
        </Link>
      </NextLink>
      <Text color="white" h3>
        Static Site Generator NextJS
      </Text>
      <NextLink href="/favorites" passHref>
        <Link>
          <Text color="white" h3>
            Favorites {favorites.length}
            <Container display="flex">
              {favorites.map(({ id, sprites: { front_default }, name }) => (
                <Image
                  key={id}
                  src={front_default}
                  width={15}
                  height={15}
                  alt={name}
                />
              ))}
            </Container>
          </Text>
        </Link>
      </NextLink>
    </div>
  );
};
