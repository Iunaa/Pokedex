import React from 'react';
import Header from './components/organisms/Header/Header';
import Search from './components/organisms/Search/Search';
import Background_image from './components/organisms/Pokedex/Pokedex';
import Pokedex from './components/organisms/Pokedex/Pokedex';

export default function App() {
  return (

    <>
     <Header/>
     <Search/>
    <Pokedex>
    </Pokedex>
    </>
  )
}
