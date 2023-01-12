import ITEM_COUNT from "../item_count/Item_Count";
import CONJURING from "../conjuring/Conjuring";
import { useState, useContext } from "react";
import { CART_CONTEXT } from "../../context/Cart_Context";
import { Link } from "react-router-dom";
import "./item_detail.css"

const ITEM_DETAIL = ({ data }) => {

    const [to_cart, set_to_cart] = useState(false);

    const {add_item} =useContext(CART_CONTEXT);

    const adding = (quantity) =>{
        // esto se vuelve true asi que se muestra que se envio al carro
        set_to_cart(true);
        add_item(data, quantity);
    };

    return (
        <div className="grid-card">
            <div className="detail">
                {
                    Object.keys(data).length === 0 ? <CONJURING/> :
                    <>
                    <img src={data.image} alt="" />
                <h2>{data.name}</h2>
                <span>Type: {data.category}</span>
                <span>Rarity: {data.rarity}</span>
                <>{
                    data.desc?.map(parra => {
                        return (
                            <p key={parra}>{parra}</p>
                        )
                    })
                }</>
                <p>Price: {data.price}</p>
                <p>we have {data.stock} units in stock</p>
                {
                    // si to_cart es true entonces pones terminar compra
                    to_cart ? <Link to="/hat"><button>Go to Hat</button></Link> 
                    : <ITEM_COUNT adding={adding} />
                }
                    </>
                }
            </div>
        </div>
    )
}
export default ITEM_DETAIL;