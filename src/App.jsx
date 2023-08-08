import React, { useState, useEffect } from 'react';
import { fetchPokemon } from './api';
import Button from './components/atoms/Button/Button';
import Play from './components/atoms/Play/Play';
import Header from './components/organisms/Header/Header';
import Pokedex from './components/organisms/Pokedex/Pokedex';
import Search from './components/organisms/Search/Search';

 function App() {

  const [pokemon, setPokemon] = useState({});
  const [id, setId] = useState(1);        //para começar no Bulba
  const [input, setInput] = useState('')

  const getPokemon = async () => {
    if (input === '') {
      let pokemons = await fetchPokemon(id)
      setPokemon(pokemons)
    } else {
      let pokemons = await fetchPokemon(input)
      if (Object.keys(pokemons).length !== 0) {
        setId(pokemons.id)
        setPokemon(pokemons)
      } else {
        setId(0)
        setPokemon({})
      }
    }
  }
  useEffect(() => {
    getPokemon()
  }, [id, input])

  return (

    <>
      <Header />
      <Search>
        <Play />
      </Search>
      <Pokedex id={id} setInput={setInput} input={input} pokemon={pokemon} setPokemon={setPokemon} setId={setId}>
        <Button setInput={setInput} id={id} pokemon={pokemon} setPokemon={setPokemon} setId={setId} />
      </Pokedex>
    </>
  )
}
export default App