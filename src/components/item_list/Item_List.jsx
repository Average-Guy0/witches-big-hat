import ITEM from "../item/Item.jsx"

const ITEM_LIST = ({ data }) => {
    return (
        data.results?.map(item => {
            const id = item.index
            return (
                <ITEM key={id} data={item} />
            )
        })
    )
}

export default ITEM_LIST;