import { FC } from 'react';
import Head from 'next/head';
import { Navbar } from '../ui';

interface Properties {
  title: string;
}

export const Layout: FC<Properties> = ({ children, title = 'Título' }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="author" content="Jonathan González" />
        <meta name="description" content="Información sobre el pokémon XXXXX" />
        <meta name="keywords" content="pokemon,pokedex,pokemons,pikachu" />
      </Head>
      <Navbar />
      <main>{children}</main>
    </>
  );
};
