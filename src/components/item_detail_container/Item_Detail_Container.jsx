import ITEM_DETAIL from "../item_detail/Item_Detail";
import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ITEM_DETAIL_CONTAINER = () => {

    const { object_index } = useParams();

    const [details, set_details] = useState([]);

    useEffect(() => {
        fetch("/data/catalog.json")
            .then((res) => res.json())
            .then((arr) => set_details(arr.find(item => item.index === object_index)))
    }, [object_index])
    return (
        <>
            <ITEM_DETAIL data={details} />
        </>
    )
}
export default ITEM_DETAIL_CONTAINER;