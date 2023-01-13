import React,{useContext} from "react";
import { CART_CONTEXT } from "../../context/Cart_Context";
import "./cart_item.css"

const CART_ITEM =({item})=>{

const {remove_item}= useContext(CART_CONTEXT)

    return (
        <div className="hat_card">
            <img src={item.image} alt={item.name} />
            <div className="hat-info">
                <p>Item: {item.name}</p>
                <p>Quantity: {item.quantity}</p>
                <p>Price: {item.price}</p>
                <p>Subtotal: {item.quantity * item.price}</p>
                <button onClick={()=> remove_item(item.id)}>Discard</button>
            </div>
        </div>
    )
};

export default CART_ITEM;