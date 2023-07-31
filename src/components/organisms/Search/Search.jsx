import React from 'react'
import style from "../Search/search.module.scss";
import iconsearch from "../../../assets/img/icons8-search-30.png";

export default function Search() {
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
