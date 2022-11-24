import "./card_widget.css"
import HAT from "../icons/witch-hat.svg"

const CARD_WIDGET = ({ children, alt = "" }) => {
    return (
        <div className="hat">

            <img src={HAT} alt={alt} />

            <div className="counter">
                {children}
            </div>
        </div>
    )
}

export default CARD_WIDGET;