import "./nav_bar.css";

import TITLE from "../title/Title"
import NAV_LINK from "../nav_link/Nav_Link";
import CARD_WIDGET from "../card_widget/Card_Widget";
import ITEM_LIST_CONTAINER from "../item_list_container/Item_List_Container";



const NAV_BAR = ()=> {
    return (
        <div className="nav page-color">
            <TITLE/>
            <ul>
                <NAV_LINK href="#">Armas</NAV_LINK>
                <NAV_LINK href="#">Armaduras</NAV_LINK>
                <NAV_LINK href="#">Anillos</NAV_LINK>
                <NAV_LINK href="#">Pociones</NAV_LINK>
                <NAV_LINK href="#">Pergaminos</NAV_LINK>
                <NAV_LINK href="#">Artefactos</NAV_LINK>
            </ul>
            <ITEM_LIST_CONTAINER greeting={"Hola Tasha!"}/>

            <CARD_WIDGET>314159265359</CARD_WIDGET>
        </div>
    )
}

export default NAV_BAR;