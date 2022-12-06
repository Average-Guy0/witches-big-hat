import ITEM from "../item/Item.jsx"

const ITEM_LIST = ({ data }) => {
    console.log(data);
    return (
        <div>
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