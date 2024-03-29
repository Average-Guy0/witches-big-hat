
import { React } from "react";
import { Link } from "react-router-dom";
import GOLD from "../icons/gold.svg"
import "./item.css";

const ITEM = ({ data }) => {



    return (
        <div className="card">
            {
                Object.keys(data).length === 0 ?
                    <div>Conjuring</div> :
                    <Link to={`/detail/${data.id}`} >
                        <h2>{data.name}</h2>
                        <img src={data.image} alt="" />
                        <h3>Rarity: {data.rarity}</h3>
                        <h4>Price: {data.price} <img src={GOLD} alt="" /></h4>
                    </Link>
            }
        </div>
    )
}

export default ITEM;