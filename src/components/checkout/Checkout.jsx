import { useContext, useState } from "react";
import { getFirestore, addDoc, collection } from "firebase/firestore";
import { CART_CONTEXT } from "../../context/Cart_Context";


const CHECKOUT = () => {

    const [info, set_info] = useState({
        name: "",
        email: "",
        credit_card: "",
        instructions: ""
    })

    const [id, set_id] = useState()

    const { hat, total_price, clear_hat } = useContext(CART_CONTEXT);

    const order = {
        info,
        // no necesito toda la info de los objetos, cosas como la imagen o el index no es importante asi que lo filtro
        items: hat.map(obj => ({
            id: obj.id,
            name: obj.name,
            price: obj.price,
            quantity: obj.quantity
        })),
        // precio total sacado del contexto
        total: total_price()
    }

    const handle_finish = (event) => {
        event.preventDefault()

        const db = getFirestore();
        const user_order = collection(db, "orders")
        addDoc(user_order, order).then((snapshot) => {

            set_id(snapshot.id)
            clear_hat()
        })

    }

    const change_handler = (event) => {
        const { value, name } = event.target;
        set_info({ ...info, [name]: value });
    };

    return (
        <>
            {/* cuando el tipo de id no es undefined muestra que se termino la compra */}
            {typeof id !== "undefined" ? (
                <div>
                    <p>your order was successful</p>
                    <p>here is your code: {id}</p>
                </div>) : (
                <form onSubmit={handle_finish}>
                    <div>
                        <label htmlFor="name">Name</label>
                        <input
                            name="name"
                            id="name"
                            value={info.name}
                            onChange={change_handler}
                        />
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            value={info.email}
                            onChange={change_handler}
                        />
                    </div>
                    <div>
                        <label htmlFor="message">Mensaje</label>
                        <textarea
                            name="message"
                            id="message"
                            value={info.message}
                            onChange={change_handler}
                        ></textarea>
                    </div>
                    <button>Send</button>
                </form>
            )}
        </>
    )
};

export default CHECKOUT;