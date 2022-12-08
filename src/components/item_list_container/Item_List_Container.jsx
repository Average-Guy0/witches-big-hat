import ITEM_LIST from "../item_list/Item_List";
import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ITEM_LIST_CONTAINER = () => {


    const [magic_items, set_magic_item] = useState([]);

    const { category_id } = useParams();
    useEffect(() => {
        fetch("/data/catalog.json")
            .then((res) => res.json())
            .then((arr) => set_magic_item(arr))
    }, [category_id]);



    return (
        <ITEM_LIST data={magic_items} />
    )
};

export default ITEM_LIST_CONTAINER;