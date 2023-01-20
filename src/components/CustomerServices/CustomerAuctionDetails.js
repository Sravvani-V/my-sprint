import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
//import img8 from '../assets/about.jpg';

import './AuctionCard.css';

function CustomerAuctionDetails(){
    const[auction, setAuction]=useState("");
    const{aid} = useParams();
    console.log(aid);

    useEffect(()=>{
        axios.get("http://localhost:8081/fetchBy/"+aid).then(resp => setAuction(resp.data));
    },[])

    return(
        <div>
            <center>
            <h1>AuctionDetails</h1>
            <table border={2} align="center">
                <div className="auctionClass">
                <thead>
                
                    <tr>
                        
                        <th>AutionID</th>
                        <th>startDate</th>
                        <th>EndDate</th>
                        <th>AuctionStatus</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {
                        auction !=null &&
                        <tr key={auction.auctionId}>
                            <td>{auction.auctionId}</td>
                            <td>{auction.startDate}</td>
                            <td>{auction.endDate}</td>
                            <td>{auction.auctionStatus}</td>

                        </tr>
                    }
                    
                </tbody>
                </div>
            </table>
            </center>

            {/* {
                auction !==null &&
                <div>
                    <p>AuctionId: {auction.auctionId}</p>
                    <p>Start Date: {auction.startDate}</p>
                    <p>End Date: {auction.endDate}</p>
                    <p>Status: {auction.auctionStatus}</p>
                </div>

                
            } */}
        </div>
    )
}

export default CustomerAuctionDetails;