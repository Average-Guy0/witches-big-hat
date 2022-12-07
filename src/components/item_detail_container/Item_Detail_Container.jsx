import ITEM_DETAIL from "../item_detail/Item_Detail";
import { React,useEffect,useState } from "react";

const ITEM_DETAIL_CONTAINER =()=>{

    const [data,set_data] = useState({});

    return(

        <ITEM_DETAIL data={data}/>
    )
}
export default ITEM_DETAIL_CONTAINER;