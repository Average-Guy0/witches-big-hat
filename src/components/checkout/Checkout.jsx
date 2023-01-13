import { useContext, useState } from "react";
import { getFirestore, addDoc, collection } from "firebase/firestore";
import { CART_CONTEXT } from "../../context/Cart_Context";
import { Link } from "react-router-dom";
import  GOLD from "../icons/gold.svg"
import "./checkout.css"


const CHECKOUT = () => {

    const [buyer, set_buyer] = useState({
        name: "",
        email: "",
        card_number: "",
        card_name: "",
        card_expiration_date: "",
        card_cvv: "",
        instructions: ""
    })

    const [id, set_id] = useState()

    const { hat, total_price, clear_hat } = useContext(CART_CONTEXT);

    const order = {
        buyer,
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
        // esto es para prevenir que mande con datos vacios
        const requiredFields = ['name', 'email', 'card_cvv', 'card_expiration_date', 'card_name', 'card_number'];
        // checkea si alguno de los campos son strings vacios y dispara la alerta
        if (requiredFields.some(field => buyer[field] === "")) {
            alert("some fields are missing")
        } else {
            addDoc(user_order, order).then((snapshot) => {

                set_id(snapshot.id)
                clear_hat()
            })
        }

    }

    const change_handler = (event) => {
        const { value, name } = event.target;
        set_buyer({ ...buyer, [name]: value });
    };

    return (
        <>
            {/* cuando el tipo de id no es undefined muestra que se termino la compra */}
            {typeof id !== "undefined" ? (
                <div className="sended">
                    <p>Your order was successful</p>
                    <p>Here is your code: {id}</p>
                    <Link to="/"><button>Return Home</button></Link>
                </div>) : (


                <section>
                    <div className="check-list">
                        <p>Here are your magic items:</p>
                        {hat.map(item => <p key={item.id}>{item.name} | quantity: {item.quantity}</p>)}
                        <p>Total: {total_price()} <img src={GOLD} alt="gold piece" className="gold" /></p> 
                        <Link to="/hat"><button>return to Hat</button></Link>
                    </div>

                    <form className="check-form" onSubmit={handle_finish}>
                        <div>
                            <label htmlFor="name">Name:</label>
                            <input
                                name="name"
                                id="name"
                                value={buyer.name}
                                onChange={change_handler} />
                        </div>
                        <div>
                            <label htmlFor="email">Email:</label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                value={buyer.email}
                                onChange={change_handler} />
                        </div>
                        <div>
                            <div className="card-1">
                                <label htmlFor="card_number">Card Number(16 numbers):</label>
                                <input type="text"
                                    id="card_number"
                                    name="card_number"
                                    pattern="[0-9]{16}"
                                    value={buyer.card_number}
                                    onChange={change_handler} />

                                <label htmlFor="card_name">Name on Card:</label>
                                <input type="text"
                                    id="card_name"
                                    name="card_name"
                                    value={buyer.card_name}
                                    onChange={change_handler} />
                            </div>
                            <div className="card-2">
                                <label htmlFor="card_expiration_date">Expiration Date:</label>
                                <input type="month"
                                    id="card_expiration_date"
                                    name="card_expiration_date"
                                    value={buyer.card_expiration_date}
                                    onChange={change_handler} />

                                <label htmlFor="card_cvv">CVV(3 numbers):</label>
                                <input type="number"
                                    id="card_cvv"
                                    name="card_cvv"
                                    pattern="[0-9]{3}"
                                    value={buyer.card_cvv}
                                    onChange={change_handler} />
                            </div>
                        </div>
                        <div className="instructions">
                            <label htmlFor="instructions">Delivery instructions (Optional):</label>
                            <textarea
                                name="instructions"
                                id="instructions"
                                value={buyer.instructions}
                                onChange={change_handler}></textarea>
                        </div>
                        <button>Send</button>
                    </form>
                </section>


            )}
        </>
    )
};

export default CHECKOUT;