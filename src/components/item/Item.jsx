
import { React } from "react";
import { Link } from "react-router-dom";
import "./item.css";

const ITEM = ({ data }) => {

    return (
        <div className="card">
            {
                Object.keys(data).length === 0 ?
                    <div>conjurando</div> :
                    <Link to={`/detail/${data.index}`} >
                        <h2>{data.name}</h2>
                        <img src={data.image} alt="" />
                        <h3>{data.rarity}</h3>
                        <h4>Price: {data.price}</h4>
                    </Link>
            }
        </div>
    )
}

export default ITEM;