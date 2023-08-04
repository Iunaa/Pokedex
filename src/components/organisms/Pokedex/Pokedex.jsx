import React from 'react';
import Background_image from "../../../assets/img/pokedex.png";
import style from "../Pokedex/pokedex.module.scss";

export default function Pokedex({ children }) {

  const pokemonName = document.querySelector('.Pokedex__fundo__name')
    const fetchPokemon = async (pokemon) => {         //função assincrona
    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

    const data = await APIResponse.json(); //utilizar o metódo json para extrair a resposta da API

    return data;
  }

  const renderPokemon = async (pokemon) => {

    const data = await fetchPokemon(pokemon);
    pokemonName.innerHTML = data.name;

  }

  renderPokemon('charizard')

  return (
    <>
      <div className={style.Pokedex}>
        <div className={style.Pokedex__fundo}>
          <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/6.gif" className={style.Pokedex__fundo__animation} />
          <h1 className={style.Pokedex__fundo__data}>
            <span className={style.Pokedex__fundo__number}> - </span>

            <span className={style.Pokedex__fundo__name}></span>
          </h1>
          <form className={style.Pokedex__fundo__form}>
            <input type='search'
              className={style.Pokedex__fundo__search}
              placeholder='Name or Number'
              required
            />
          </form>
          {children}
          <img className={style.Pokedex__fundo__img} src={Background_image} />
        </div>
      </div>
    </>
  )
}
