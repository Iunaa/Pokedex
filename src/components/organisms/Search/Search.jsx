import React from 'react';
import logo from "../../../assets/img/logo.png";
import style from "../Search/search.module.scss";

function Search({ children }) {

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
export default Search