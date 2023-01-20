import React, { userState, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function AuctionBids() {

    // const [auctionId, setAuctionId] = useState("");
    const [bid, setBid] = useState([]);
    const{aid} = useParams();
    console.log(aid);
    //const [message, setMessage] = useState("");

    const handleSubmit = () => {
        //api call
        axios.get("http://localhost:8081/Get/Bid/By/" + aid)
            .then(resp => {
                setBid(resp.data)
                console.log(resp.data)
            },[])
            // .catch(error => {
            //     setBid([]);
            //     setMessage(error.response.data)
            // })
    }

    return (<div>
        {/* <h1>Search For List Of Bids</h1> */}
        {/* <div>
            <label>Enter Auction Id</label>
            <input type="text" name="auctionId" value={auctionId}
                onChange={(event) => setAuctionId(event.target.value)}></input>
        </div>
        <button onClick={handleSubmit}>Search</button> */}
        {
            bid.map(b => 
                <div>
                    {b.bidId} {b.bidValue}
                </div>
            )
        }
    </div>)
}
export default AuctionBids;