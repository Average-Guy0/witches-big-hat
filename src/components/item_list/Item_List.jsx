import "./item_list.css"
import ITEM from "../item/Item.jsx";
import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ITEM_LIST = ({ data }) => {

    const [catalog, set_catalog] = useState([]);

    const { category_id } = useParams();

    useEffect(() => {
        // si existe un category_id lo usamos para filtrar los items por esa categoria, de lo contrario muestra todo
        if (category_id) {
            set_catalog(data.filter(item => item.category === category_id))
        } else {
            set_catalog(data)
        }
    }, [category_id, data])

    return (
        <div className="card-container">
            {
                catalog?.map(item => {
                    const id = item.id
                    return (
                        <ITEM key={id} data={item} />
                    )
                })
            }
        </div>
    )
}

export default ITEM_LIST;