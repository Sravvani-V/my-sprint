import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function AuctionStatus() {
    const [auctionStatus, setAuctionStatus] = useState("");

    const [auction, setAuction] = useState([]);

    const [message, setMessge] = useState("");



    const handleSubmit = () => {



        //api call



        axios.get("http://localhost:8081/auction/getBy/" +auctionStatus)

            .then(resp => {
                //console.log(resp.data);
                setAuction(resp.data)
            })

            .catch(error => {

                setAuction([]);

                setMessge(error.response.data)



            })

    }



    return (<div className='container'>

        <br /><br /><br />

        <h1>Search auction By Status</h1>

        <div>

            <br /><br />

            <label id="cat1">Enter Status</label>

            <input type="text" id="status" name="auctionStatus" value={auctionStatus}

                onChange={(event) => setAuctionStatus(event.target.value)} placeholder="Enter Auction Status" /><br />

        </div>

        <br />

        <button onClick={handleSubmit}>Search</button><br /><br />

        <h2>Auction Details</h2>

        {
            

           auction.map(p=><div>

                

                <p id='y'>AuctionId: {p.auctionId}</p>

                <p id='y'>StartDate: {p.startDate}</p>

                <p id='y'>End Date: {p.endDate}</p>

                <p id='y'>Auction Status: {p.auctionStatus}</p>

               

            </div>

             

           )

         

        }



    </div>)



}



export default AuctionStatus;



