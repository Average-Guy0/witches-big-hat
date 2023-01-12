import MAGIC from "../icons/destructive.svg"
import "./conjuring.css"

const CONJURING = () => {
    return (
        <div className="conjuring">
            <img src={MAGIC} alt="witch magic" className="flame" />
            <span>Conjuring...</span>
        </div>
    )
}

export default CONJURING;