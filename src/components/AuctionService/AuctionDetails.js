import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
//import img8 from '../assets/about.jpg';

function AuctionDetails(){
    const[auction, setAuction]=useState("");
    const{aid} = useParams();
    console.log(aid);

    useEffect(()=>{
        axios.get("http://localhost:8081/fetchBy/"+aid).then(resp => setAuction(resp.data));
    },[])

    return(
        <div>
            <h1>AuctionDetails</h1>
            {
                auction !==null &&
                <div>
                    <p>AuctionId: {auction.auctionId}</p>
                    <p>Start Date: {auction.startDate}</p>
                    <p>End Date: {auction.endDate}</p>
                    <p>Status: {auction.auctionStatus}</p>
                </div>
            }
        </div>
    )
}

export default AuctionDetails;