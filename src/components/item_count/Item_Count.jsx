import { React, useState } from "react";
import "./item_count.css"

const ITEM_COUNT = ({ adding, stock }) => {

    const [counter, set_counter] = useState(1)

    const up = () => {
        // condicion simple, si hay menos que el stock de items no cuenta mas
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
                {/* cuando estaba limpiando el codigo queria remplazar el ()=> adding por un button handler que estubiera arriva, pero me daba errores en el componente asi que lo deje como esta ahora */}
            </div>
        </>
    )
}

export default ITEM_COUNT;

