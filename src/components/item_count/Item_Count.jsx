import {React,useState} from "react";

const ITEM_COUNT = ()=>{

const [counter,set_counter] = useState(42)

const up =()=>{
    set_counter(counter+1)
}
const down =()=>{
    set_counter(counter-1)
}

    return(
        <div>
            <button onClick={down}>-</button>
            <span>{counter}</span>
            <button onClick={up}>+</button>
            <div>
                <button>agregar</button>
            </div>
        </div>
    )
}

export default  ITEM_COUNT;