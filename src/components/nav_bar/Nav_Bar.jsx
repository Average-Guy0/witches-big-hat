import "./nav_bar.css";

import TITLE from "../title/Title";
import CARD_WIDGET from "../card_widget/Card_Widget";
import { Link } from "react-router-dom";



const NAV_BAR = ()=> {
    return (
        <div className="nav page-color">
            <TITLE/>
            <ul>
                <li><Link to={"armas"} >Armas</Link></li>
                <li><Link to={"armaduras"}>Armaduras</Link></li>
                <li><Link to={"anillos"}>Anillos</Link></li>
                <li><Link to={"pociones"}>Pociones</Link></li>
                <li><Link to={"artefactos"}>Artefactos</Link></li>

            </ul>

            <CARD_WIDGET>42</CARD_WIDGET>
        </div>
    )
}

export default NAV_BAR;