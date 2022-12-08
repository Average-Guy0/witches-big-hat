import ITEM_COUNT from "../item_count/Item_Count";

const ITEM_DETAIL = ({ data }) => {
    console.log(data);

    return (
        <div>
            <img src={data.image} alt="" />
            <h2>{data.name}</h2>
            <span>{data.category}</span>
            <span>{data.rarity}</span>
            <p>{data.desc}</p>
            <p>Price: {data.price}</p>
            <p>we have {data.stock} units in stock</p>
            <ITEM_COUNT/>
        </div>
    )

}
export default ITEM_DETAIL;