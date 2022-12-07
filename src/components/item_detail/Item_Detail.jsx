const ITEM_DETAIL = ({ data }) => {
    return (
        <div>
            <h2>{data.name}</h2>
            <p>{data.desc}</p>
        </div>
    )
}
export default ITEM_DETAIL;