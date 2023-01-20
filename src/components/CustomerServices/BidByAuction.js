import React, { useEffect, userState, useState } from "react";
import axios from "axios";
import { useParams, useNavigate, Link } from 'react-router-dom';

import './AuctionCard.css';

function BidByAuction() {
    //const [auctionId, setAuctionId] = useState("");
    const [bids, setBids] = useState([]);
    const [message, setMessage] = useState("");

    const { auctionId } = useParams();

    const Navigate = useNavigate();

    useEffect(() => {
        //api call
        axios.get("http://localhost:8081/Get/Bid/By/" + auctionId)
            .then(resp => {
                setBids(resp.data)
                console.log(resp.data)
            })
            .catch(error => {
                setBids([]);
                setMessage(error.response.data)
            })
    }, [auctionId])

    // const handlePlaceBid = () =>{
    //     Navigate(`/place/bid`);

    // }

    return (<div>
        <center>
            <h2><b>Search For List Of Bids</b></h2>
            {/* <div>
            <label>Enter Auction Id</label>
            <input type="text" name="auctionId" value={auctionId}
                onChange={(event) => setAuctionId(event.target.value)}></input>
        </div>
        <button onClick={handleSubmit}>Search</button> */}
            <table>
                <div className="bidClass">
                    <thead>
                        <tr>
                            <th>Bid Id</th>
                            <th>BiD value</th>
                        </tr>

                    </thead>
                    <tbody>
                        {
                            bids.map(b =>

                                <tr key={b.bidId}>
                                    <td>{b.bidId}</td>
                                    <td>{b.bidValue}</td>

                                </tr>)

                        }

                    </tbody>



                </div>


            </table>
            <div className="placeBid">
            <Link to={`/place/bid/${auctionId}`}><b>Place bid</b></Link>
            </div>

            {/* <Link to={`/place/bid/${auctionId}`}><b>Place bid</b></Link> */}
        </center>
    </div>)
}
export default BidByAuction;