import "./nav_bar.css";

import TITLE from "../title/Title";
import CART_WIDGET from "../cart_widget/Cart_Widget";
import { Link } from "react-router-dom";
import SWORD from "../icons/sword.svg"
import ARMOR from "../icons/armor.svg"
import RING from "../icons/magic-ring.svg"
import POTION from "../icons/potion.svg"
import ARTEFACT from "../icons/crystal.svg"



const NAV_BAR = () => {
    return (
        <div className="nav page-color">
            <TITLE />
            <ul>
                <li><Link to={"/weapon"}> <img src={SWORD} alt="" /> Weapons</Link></li>
                <li><Link to={"/armor"}> <img src={ARMOR} alt="" /> Armor</Link></li>
                <li><Link to={"/ring"}> <img src={RING} alt="" /> Rings</Link></li>
                <li><Link to={"/potion"}> <img src={POTION} alt="" /> Potions</Link></li>
                <li><Link to={"/artefact"}> <img src={ARTEFACT} alt="" /> Artefact</Link></li>

            </ul>

            <Link to={"/hat"}><CART_WIDGET /></Link>
        </div>
    )
}

export default NAV_BAR;