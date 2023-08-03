import style from "../Button/button.module.scss"

function Button () {
    return(
        <div className={style.buttons}>
            <button className={style.buttons__prev}>Prev &lt; </button>
            <button className={style.buttons__next}>Next &gt;</button>
        </div>
    );
}

export default Button