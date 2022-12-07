
import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./item.css";

const ITEM = ({ data }) => {

    let url = `http://www.dnd5eapi.co${data.url}`
    console.log(url);
    const [magic, set_magic] = useState({});

    const {category_id} = useParams()

    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((obj)=> set_magic(obj))

    }, []);

    return (
        <div className="card">
            {
                Object.keys(magic).length === 0 ?
                    <div>conjurando</div> :
                    <div>
                        <h2>{magic.name}</h2>
                        <h3>{magic.equipment_category.name}</h3>
                        <p>{magic.rarity.name}</p>
                    </div>
            }

        </div>
    )
}

export default ITEM;