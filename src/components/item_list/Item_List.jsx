import "./item_list.css"
import ITEM from "../item/Item.jsx"

const ITEM_LIST = ({ data }) => {
    return (
        <div className="card-container">
            {
                data.results?.map(item => {
                    const id = item.index
                    return (
                        <ITEM key={id} data={item} />
                    )
                })
            }
        </div>
    )
}

export default ITEM_LIST;