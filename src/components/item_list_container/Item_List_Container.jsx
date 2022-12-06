import ITEM_LIST from "../item_list/Item_List";
import { React, useState, useEffect } from "react";

const ITEM_LIST_CONTAINER = ({ greeting }) => {

    const [MAGIC_ITEMS, SET_MAGIC_ITEMS] = useState({});

    useEffect(() => {
        fetch("http://www.dnd5eapi.co/api/magic-items")
            .then((res) => res.json())
            .then(SET_MAGIC_ITEMS)
    }, []);

    return (

        <div>
            <h2>{greeting}</h2>
            <ITEM_LIST data={MAGIC_ITEMS} />
        </div>
    )
};

export default ITEM_LIST_CONTAINER;