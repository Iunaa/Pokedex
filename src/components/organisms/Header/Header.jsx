import iconpok from "../../../assets/img/icons8-pokeball-64.png";
import iconuser from "../../../assets/img/icons8-user-64.png";
import "../Header/header.scss";

function Header() {
    return(
        <>
            <div className="headerPoke">
                <img src={iconpok}/>
                <img src={iconuser}/>
                
            </div>
        </>
    );
}


export default Header