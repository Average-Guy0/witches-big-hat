import React, { useContext } from "react";
import { CART_CONTEXT } from "../../context/Cart_Context";
import CART_ITEM from "../cart_item/Cart_Item";
import  GOLD from "../icons/gold.svg"
import { Link } from "react-router-dom";
import "./cart.css"

const CART = () => {

    const { hat, total_price, clear_hat } = useContext(CART_CONTEXT);

    if (hat.length === 0) {
        return (
            <div className="empty-hat">
                <p>Looks like your hat is empty</p>
                <Link to="/"><button>Return home</button></Link>
            </div>
        )
    } else {
        return (
            <div className="hat-details">
                {hat.map(item => <CART_ITEM key={item.id} item={item} />)}
                <p>total: {total_price()} <img src={GOLD} alt="gold piece" className="gold" /></p>
                <button onClick={() => clear_hat()}>Clear the entire hat</button>
                <Link to='/checkout'><button>Finish Order</button></Link>
            </div>
        )
    }

};

export default CART;