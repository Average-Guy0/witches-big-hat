import { React, useState } from "react";
import "./item_count.css"

const ITEM_COUNT = () => {

    const [counter, set_counter] = useState(1)

    const up = () => {
        set_counter(counter + 1)
    }
    const down = () => {
        set_counter(counter - 1)
    }

    return (
        <>
            <div className="count">
                <button onClick={down}>-</button>
                <span>{counter}</span>
                <button onClick={up}>+</button>
            </div>

            <div className="add-to-hat">
                <button>Agregar al Sombrero</button>
            </div>
        </>
    )
}

export default ITEM_COUNT;