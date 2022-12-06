import WITCH from "../icons/sorceress.svg";
import "./title.css"
import { Link } from "react-router-dom";

const TITLE = () => {
    return (
        <div className="title">
            <Link to="/"><img src={WITCH} alt="" /></Link>
            <Link to="/"><h1>The Witch's Big Hat</h1></Link>
            
            
        </div>
    )
};

export default TITLE;