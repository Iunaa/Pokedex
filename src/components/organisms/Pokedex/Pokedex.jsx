import React from 'react';
import Background_image from "../../../assets/img/pokedex.png";
import style from "../Pokedex/pokedex.module.scss";

export default function Pokedex({ children }) {

  const pokemonName = document.querySelector('.Pokedex__fundo__name');
  const pokemonNumber = document.querySelector('.Pokedex__fundo__number');
  const pokemonAnimation = document.querySelector('.Pokedex__fundo__animation');
  const form = document.querySelector('.Pokedex__fundo__form');
  const input = document.querySelector('.Pokedex__fundo__search');
  const buttonPrev = document.querySelector('.buttons__prev');
  const buttonNext = document.querySelector('.buttons__next');

  let searchPokemon = 1

    const fetchPokemon = async (pokemon) => {         //função assincrona
      const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

      if(APIResponse.status == 200) {

        const data = await APIResponse.json(); //utilizar o metódo json para extrair a resposta da API
        return data;

      }

    
  }

  const renderPokemon = async (pokemon) => {

    pokemonName.innerHTML = 'loading...';
    pokemonNumber.innerHTML = '';

    const data = await fetchPokemon(pokemon);

    if(data) {
      pokemonAnimation.style.display = 'block';
    pokemonName.innerHTML = data.name;
    pokemonNumber.innerHTML = data.id;
    pokemonAnimation.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];
    input.value = '';
    searchPokemon = data.id;
    } else {
      pokemonAnimation.style.display = 'none';
      pokemonName.innerHTML = 'Not found';
      pokemonNumber.innerHTML = '';
    

  }
 form.addEventListener('submit', (event) => {
   event.preventDefault();
   renderPokemon(input.value.toLowerCase());
   
 })
  buttonPrev.addEventListener('click', () => {

    if(searchPokemon > 1){
    searchPokemon -= 1;
    renderPokemon(searchPokemon);
    }
    
  })

  buttonNext.addEventListener('click', () => {
    searchPokemon +=1;
    renderPokemon(searchPokemon);


  })
 renderPokemon('1');


  return (
    <>
      <div className={style.Pokedex}>
        <div className={style.Pokedex__fundo}>
          <img src="#" className={style.Pokedex__fundo__animation} />
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
}