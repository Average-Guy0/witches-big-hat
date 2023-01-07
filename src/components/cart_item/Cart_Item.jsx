import React,{useContext} from "react";
import { CART_CONTEXT } from "../../context/Cart_Context";

const CART_ITEM =({item})=>{

const {remove_item}= useContext(CART_CONTEXT)

    return (
        <div>
            <img src={item.image} alt={item.name} />
            <div>
                <p>Item: {item.name}</p>
                <p>cuantity: {item.quantity}</p>
                <p>Precio: {item.price}</p>
                <p>subtotal: {item.quantity * item.price}</p>
                <button onClick={()=> remove_item(item.id)}>Descartar</button>
            </div>
        </div>
    )
};

export default CART_ITEM;