import ITEM_COUNT from "../item_count/Item_Count";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./item_detail.css"

const ITEM_DETAIL = ({ data }) => {

    const [to_cart, set_to_cart] = useState(false);


    const adding = (quantity) =>{
        console.log(quantity);
        set_to_cart(true);
    }

    return (
        <div className="grid-card">
            <div className="detail">
                <img src={data.image} alt="" />
                <h2>{data.name}</h2>
                <span>Type: {data.category}</span>
                <span>Rarity: {data.rarity}</span>
                <>{
                    data.desc?.map(parra => {
                        return (
                            // no logre descubrir como hacer el key para cada uno de los parrafos
                            <p key={parra}>{parra}</p>
                        )
                    })
                }</>
                <p>Price: {data.price}</p>
                <p>we have {data.stock} units in stock</p>
                {
                    to_cart ? <Link to="/hat">terminar compra</Link> 
                    : <ITEM_COUNT adding={adding} />
                }
                
            </div>

        </div>
    )

}
export default ITEM_DETAIL;