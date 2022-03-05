import { Text, useTheme } from '@nextui-org/react';
import Image from 'next/image';
import Link from 'next/link';

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
      <Link href="/" passHref>
        <Image
          src="/images/logo.png"
          alt="Icono de la aplicación"
          width={150}
          height={60}
        />
      </Link>
      <Text color="white" h3>
        Pokemon
      </Text>
      <Text color="white" h3>
        Favoritos{' '}
      </Text>
    </div>
  );
};
