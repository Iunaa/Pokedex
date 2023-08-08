import style from "../Button/button.module.scss";

function Button({ pokemon, id, setInput, setPokemon, setId }) {
    return (
        <div className={style.buttons}>
            <button onClick={() => {
                setInput('');
                setId(--id);

            }} className={style.buttons__prev}>Prev &lt; </button>
            <button onClick={() => {
                setInput('');
                setId(++id);
            }} className={style.buttons__next}>Next &gt;</button>
        </div>
    );
}

export default Button