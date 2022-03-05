import { Text, useTheme } from '@nextui-org/react';
import Image from 'next/image';
import NextLink from 'next/link';
import { Link } from '@nextui-org/react';

export const Navbar = () => {
  const { theme } = useTheme();

  return (
    <div
      style={{
        display: 'flex',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '1rem 1.2rem',
        backgroundColor: theme?.colors.gray900.value,
      }}
    >
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
        Pokemon
      </Text>
      <NextLink href="/favorites" passHref>
        <Link>
          <Text color="white" h3>
            Favoritos{' '}
          </Text>
        </Link>
      </NextLink>
    </div>
  );
};
