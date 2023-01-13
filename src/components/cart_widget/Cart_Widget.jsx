import "./cart_widget.css"
import React, { useContext } from "react"
import { CART_CONTEXT } from "../../context/Cart_Context"
import HAT from "../icons/witch-hat.svg"

const CART_WIDGET = ({ alt = "a witch's hat" }) => {

    const { total_quantity } = useContext(CART_CONTEXT)

    return (
        <div className="hat">

            <img src={HAT} alt={alt} />
            {/* si no hay nada en el carro no se renderiza el contador */}
            {total_quantity() === 0 ? "" :
                <div className="counter">
                    <span>{total_quantity()}</span>
                </div>
            }
        </div>
    )
}

export default CART_WIDGET;