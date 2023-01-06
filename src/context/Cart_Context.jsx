import React, { useState } from "react";

const CART_CONTEXT = React.createContext([])

const CART_PROVIDER = ({ children }) => {

    const [cart, set_cart] = useState([])

    const clear_cart = () => set_cart([])

    const is_in_cart = (id) => cart.find(item => item.id === id) ? true : false;

    const remove_item = (id) => set_cart(cart.filter(item => item.id !== id));


    return (
        <CART_CONTEXT.Provider value={{
            clear_cart,
            is_in_cart,
            remove_item
        }}>
            {children}
        </CART_CONTEXT.Provider>
    )
}

export { CART_PROVIDER, CART_CONTEXT };