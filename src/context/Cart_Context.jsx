import React, { useState } from "react";

const CART_CONTEXT = React.createContext([])

const CART_PROVIDER = ({ children }) => {

    // recuerda que uso hat para referirme al cart, es mas tematico con la tienda 
    // tl;dr: hat===cart
    const [hat, set_hat] = useState([])

    const clear_hat = () => set_hat([])

    const is_in_hat = (id) => hat.find(item => item.id === id) ? true : false;

    const remove_item = (id) => set_hat(hat.filter(item => item.id !== id));

    const add_item =(new_item, new_quantity)=> {
        // const new_hat = hat.filter(item=>item.id !== new_item.id);
        // new_hat.push({...new_item, quantity: new_quantity})
        // set_hat(new_hat)
        let new_hat = [];
        // con esto busco si el nuevo item esta en el carro
        let item = hat.find(old_item => old_item.id === new_item.id);

        if (item) {
            // si el item esta le sumo la nueva cantidad y creo un neuvo array
            item.quantity += new_quantity;
            new_hat = [...hat]
        } else {
            // si no esta el item lo creo con la nueva cantidad y lo agrego al con el viejo carrito a uno nuevo
            item = {...new_item, quantity: new_quantity}
            new_hat= [...hat, item]
        }
        // y finalmente lo seteo al carrito
        set_hat(new_hat)
    }

    console.log("carrito:", hat);

    return (
        <CART_CONTEXT.Provider value={{
            clear_hat,
            is_in_hat,
            remove_item,
            add_item
        }}>
            {children}
        </CART_CONTEXT.Provider>
    )
}

export { CART_PROVIDER, CART_CONTEXT };