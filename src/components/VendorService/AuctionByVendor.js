import React, { userState, useState } from "react";
import axios from "axios";

function AuctionByVendor(){

    const [loginId, setLoginId] = useState("");
    const [auction, setAuction] = useState([]);
    const [message, setMessage] = useState("");

    const handleSubmit = () => {
        //api call
        axios.get("http://localhost:8081/Get/auction/using/vendor/" + loginId)
            .then(resp => {
                setAuction(resp.data)
                console.log(resp.data)
            })
            .catch(error => {
                setAuction([]);
                setMessage(error.response.data)
            })
    }

    return (<div>
        <h1>Search For List Of Auctions</h1>
        <div>
            <label>Enter Auction Id</label>
            <input type="text" name="loginId" value={loginId}
                onChange={(event) => setLoginId(event.target.value)}></input>
        </div>
        <button onClick={handleSubmit}>Search</button>
        {
            auction.map(a => 
                <div>
                    {a.auctionId} {a.startDate} {a.endDate} {a.auctionStatus}
                </div>
            )
        }
    </div>)
}
export default AuctionByVendor;