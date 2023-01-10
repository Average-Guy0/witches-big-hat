import ITEM_LIST from "../item_list/Item_List";
import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getFirestore, collection, getDocs } from "firebase/firestore"

const ITEM_LIST_CONTAINER = () => {


    const [magic_items, set_magic_item] = useState([]);

    const { category_id } = useParams();

    useEffect(() => {
        const db = getFirestore();
        const item_collection = collection(db, "items");

        getDocs(item_collection).then((snapshot) => {
            const items = snapshot.docs.map((doc) => ({
                id: doc.id, ...doc.data()
            }));
            set_magic_item(items)
        });
    }, [category_id]);


    return (
        <>
            {magic_items.length === 0 ? <div>Conjurando</div> : <ITEM_LIST data={magic_items} />}
        </>
    )
};

export default ITEM_LIST_CONTAINER;