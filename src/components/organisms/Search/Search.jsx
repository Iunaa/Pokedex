import React, { useEffect, useState } from 'react';
import { AllPokemons } from '../../../api';
import logo from "../../../assets/img/logo.png";
import style from "../Search/search.module.scss";

export default function Search({ children }) {
  
  return (
    <>
      <div className={style.Container}>
        <div className={style.Container__initialPoke}>
          <img className={style.Container__initialPoke__title} src={logo} />
          {children}


        </div>
      </div>
    </>
  )
}
