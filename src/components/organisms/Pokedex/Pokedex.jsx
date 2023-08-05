import React from 'react';
import Background_image from "../../../assets/img/pokedex.png";
import style from "../Pokedex/pokedex.module.scss";

export default function Pokedex({ children }) {

  return (
    <>
      <div className={style.Pokedex}>
        <div className={style.Pokedex__fundo}>
          {Object.keys(pokemon).length !== 0 && (<img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${id}.gif`} className={style.Pokedex__fundo__animation} />)}
          <h1 className={style.Pokedex__fundo__data}>
            <span className={style.Pokedex__fundo__number}>{id}</span>
            {Object.keys(pokemon).length !== 0 && (<span className={style.Pokedex__fundo__name}>{pokemon.name}</span>)}

          </h1>
          <form onSubmit={(e) => {
            e.preventDefault();

            if (e.type === 'submit') {
              setInput(search)
              setSearch('')
            }
          }} className={style.Pokedex__fundo__form}>
            <input type='search'
              className={style.Pokedex__fundo__search}
              placeholder='Name or Number'
              required
              value={search}
              onChange={(e) => {
                setSearch(e.target.value)
              }}
            />
          </form>
          {children}
          <img className={style.Pokedex__fundo__img} src={Background_image} />
        </div>
      </div>
    </>
  )
}
