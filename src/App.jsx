import React from 'react';
import Button from './components/atoms/Button/Button';
import Play from './components/atoms/Play/Play';
import Header from './components/organisms/Header/Header';
import Pokedex from './components/organisms/Pokedex/Pokedex';
import Search from './components/organisms/Search/Search';

export default function App() {
  return (

    <>
      <Header />
      <Search>
        <Play />
      </Search>
      <Pokedex>
        <Button />
      </Pokedex>
    </>
  )
}
