import React, { useEffect } from 'react'
import style from "../Play/play.module.scss";
import audio from "../../../assets/abertura.mp3";

export default function Play() {

  return (
    <div className={style.control}>
        <div className={style.click}>
        <p>Click</p>
        </div>
        <p className={style.control__pause} onClick={() => {
             let audio = document.getElementById("audio");
            audio.pause();
        }}>&#9612; &#9612;</p>
        <p onClick={() => {
             let audio = document.getElementById("audio");
            audio.play();
        }} className={style.control__play}>&#9658;</p>
        <audio  id="audio" preload="auto">
            <source src={audio} type="audio/mpeg" />
        </audio>
    </div>
  )
}
