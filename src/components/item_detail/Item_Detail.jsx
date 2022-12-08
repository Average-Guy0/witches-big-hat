import ITEM_COUNT from "../item_count/Item_Count";
import "./item_detail.css"

const ITEM_DETAIL = ({ data }) => {
    console.log(data);

    return (
        <div className="grid-card">
            <div className="detail">
                <img src={data.image} alt="" />
                <h2>{data.name}</h2>
                <span>Type: {data.category}</span>
                <span>Rarity: {data.rarity}</span>
                <>{
                    data.desc?.map(parra => {
                        return (
                            // no logre descubrir como hacer el key para cada uno de los parrafos
                            <p>{parra}</p>
                        )
                    })
                }</>
                <p>Price: {data.price}</p>
                <p>we have {data.stock} units in stock</p>
                <ITEM_COUNT />
            </div>

        </div>
    )

}
export default ITEM_DETAIL;