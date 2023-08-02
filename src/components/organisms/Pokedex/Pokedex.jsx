import React from 'react'
import Background_image from "../../../assets/img/pokedex.png";
import style from "../Pokedex/pokedex.module.scss";

export default function Pokedex() {
  return (
    <>
      <div className={style.Pokedex}>
        <div className={style.Pokedex__fundo}>
            <img src={Background_image}/>
        </div>
      </div>
    </>
  )
}
