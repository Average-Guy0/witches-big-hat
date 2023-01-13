import { React, useState } from "react";
import "./item_count.css"

const ITEM_COUNT = ({ adding, stock }) => {

    const [counter, set_counter] = useState(1)

    const up = () => {
        if (counter < stock) {
            set_counter(counter + 1)
        }
    }
    const down = () => {
        if (counter > 1) {
            set_counter(counter - 1)
        }
    }

    return (
        <>
            <div className="count">
                <button onClick={down}>-</button>
                <span>{counter}</span>
                <button onClick={up}>+</button>
            </div>

            <div className="add-to-hat">
                {/* la funcion adding la trae del padre item_detail_container */}
                <button onClick={() => adding(counter)}>Add to Hat</button>
            </div>
        </>
    )
}

export default ITEM_COUNT;

