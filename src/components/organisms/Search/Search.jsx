import React, { useEffect, useState } from 'react'
import style from "../Search/search.module.scss";
import iconsearch from "../../../assets/img/icons8-search-30.png";
import { AllPokemons } from '../../../api';

export default function Search() {
    const [pokemons, setPokemons] = useState([]);

  async function getPokemons() {     //serve pra mostrar que essa função serve para puxar dados
    const pokemons = await AllPokemons()   //o await serve para esperar para puxar os dados
    console.log(pokemons);  

  }

    useEffect(() => {
        getPokemons()
    }, [])

  return (
     <>
     <div className={style.Container}>
        <div className={style.Container__initialPoke}>
            <h1 className={style.Container__initialPoke__title}>Pokedéx</h1>
            <p className={style.Container__initialPoke__paragraph}>Search for a Pokémon by name or using its National Pokedéx number</p>
            
            <div className={style.Container__initialPoke__search}>
                <img src={iconsearch}/>
                <input placeholder='Name or number' className={style.Container__initialPoke__input}></input>
            </div>
        </div>
    </div>
     </>
  )
}
