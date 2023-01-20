import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function BidDetails(){
    const[bid, setBid]=useState("");
    const{pid} = useParams();
    console.log(pid);

    useEffect(()=>{
        axios.get("http://localhost:8081/getBy/"+pid).then(resp => setBid(resp.data));
    },[])

    return(
        <div>
            <h1>BidDetails</h1>
            {
                bid !==null &&
                <div>
                    <p>BidId: {bid.bidId}</p>
                    <p>BidValue: {bid.bidValue}</p>
                </div>
            }
        </div>
    )
}
export default BidDetails;