import React, { useContext } from "react";
import { CART_CONTEXT } from "../../context/Cart_Context";
import CART_ITEM from "../cart_item/Cart_Item";
import { Link } from "react-router-dom";
import "./cart.css"

const CART = () => {

    const { hat, total_price, clear_hat } = useContext(CART_CONTEXT);

    if (hat.length === 0) {
        return (
            <div>nothing</div>
        )
    } else {
        return (
            <div className="hat-details">
                <div className="hat-list">
                {hat.map(item => <CART_ITEM key={item.id} item={item} />)}
                </div>
                <p>total: {total_price()}</p>
                <button onClick={() => clear_hat()}>Clear the entire hat</button>
                <Link to='/checkout'><button>Finish Order</button></Link>

            </div>
        )
    }

};

export default CART;