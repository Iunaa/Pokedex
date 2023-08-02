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
            
            
        </div>
    </div>
     </>
  )
}
