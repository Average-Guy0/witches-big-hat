import "./nav_bar.css";

import TITLE from "../title/Title";
import CART_WIDGET from "../cart_widget/Cart_Widget";
import { Link } from "react-router-dom";




const NAV_BAR = ()=> {
    return (
        <div className="nav page-color">
            <TITLE/>
            <ul>
                <li><Link to={"/weapon"} >Armas</Link></li>
                <li><Link to={"/armor"}>Armaduras</Link></li>
                <li><Link to={"/ring"}>Anillos</Link></li>
                <li><Link to={"/potion"}>Pociones</Link></li>
                <li><Link to={"/artefact"}>Artefactos</Link></li>

            </ul>

            <Link to={"/hat"}><CART_WIDGET/></Link>
        </div>
    )
}

export default NAV_BAR;