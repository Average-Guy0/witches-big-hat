import ITEM_DETAIL from "../item_detail/Item_Detail";
import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFirestore, doc, getDoc } from "firebase/firestore";

const ITEM_DETAIL_CONTAINER = () => {

    const { object_index } = useParams();

    const [details, set_details] = useState([]);

    useEffect(() => {

        const db = getFirestore()
        const item_detail = doc(db, "items", object_index);

        getDoc(item_detail).then((snapshot) => {
            if (snapshot.exists()) {
                set_details({ id: snapshot.id, ...snapshot.data() })
            }
        })

    }, [object_index])

    return (
        <>
            <ITEM_DETAIL data={details} />
        </>
    )
}
export default ITEM_DETAIL_CONTAINER;