import { FC } from 'react';
import Head from 'next/head';
import { Navbar } from '../ui';

interface Properties {
  title: string;
}

export const Layout: FC<Properties> = ({ children, title = 'Título' }) => {
  const origin = typeof window === 'undefined' ? '' : window.location.origin;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="author" content="Jonathan González" />
        <meta
          name="description"
          content={`Información sobre el pokémon ${title}`}
        />
        <meta name="keywords" content="pokemon,pokedex,pokemons,pikachu" />

        <meta
          property="og:title"
          content={`Información sobre el pokémon ${title}`}
        />
        <meta
          property="og:description"
          content={`Esta es la descripción del pokémon ${title}`}
        />
        <meta property="og:image" content={`${origin}/images/banner.png`} />
      </Head>
      <Navbar />
      <main>{children}</main>
    </>
  );
};
