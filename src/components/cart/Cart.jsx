import React, { useContext } from "react";
import { CART_CONTEXT } from "../../context/Cart_Context";
import CART_ITEM from "../cart_item/Cart_Item";

const CART = () => {
    // hat===cart, lo llamo hat porque es tematico de la tienda
    const { hat, total_price } = useContext(CART_CONTEXT);

    if (hat.length === 0) {
        return (
            <div>nothing</div>
        )
    } else {
        return (
            <>
            {hat.map(item => <CART_ITEM key={item.id} item={item} />)}
            <p>total: {total_price()}</p>
            </>
        )
    }

};

export default CART;