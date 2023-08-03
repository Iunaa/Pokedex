import React from 'react';
import Header from './components/organisms/Header/Header';
import Search from './components/organisms/Search/Search';
import Background_image from './components/organisms/Pokedex/Pokedex';
import Pokedex from './components/organisms/Pokedex/Pokedex';
import Button from './components/atoms/Button/Button';
import Play from './components/atoms/Play/Play';

export default function App() {
  return (

    <>
     <Header/>
     <Search>
      <Play/>
     </Search>
    <Pokedex>
        <Button/>
    </Pokedex>
    </>
  )
}
