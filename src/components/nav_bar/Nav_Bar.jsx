import "./nav_bar.css";

import TITLE from "../title/Title"

const NAV_BAR = ()=> {
    return (
        <div className="nav">
            <TITLE/>
            <ul>
                <li><a href="#">Armas</a></li>
                <li><a href="#">Armaduras</a></li>
                <li><a href="#">Anillos</a></li>
                <li><a href="#">Pergaminos</a></li>
                <li><a href="#">Pociones</a></li>
                <li><a href="#">Artefactos</a></li>
            </ul>
        </div>
    )
}

export default NAV_BAR;