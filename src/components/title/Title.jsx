import WITCH from "../icons/sorceress.svg";
import "./title.css"

const TITLE = () => {
    return (
        <div className="title">
            <img src={WITCH} alt="" />
            <h1>The Witch's Big Hat</h1>
        </div>
    )
};

export default TITLE;