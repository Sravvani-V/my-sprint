import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
function AllAuctions() {
    const [auction, setAuction] = useState([]);
    //similar to componentDidMount and componentDidUpdate
    useEffect(() => {
        axios.get("http://localhost:8081/getallAuctions").then(resp => setAuction(resp.data));
    }, [])
    return (
        <div className="container">
            <h1>All Auctions</h1>
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th>auctionId</th>
                        <th>startDate</th>
                        <th>endDate</th>
                        <th>auctionStatus</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        auction.map(a => <tr key={a.auctionId}>
                            <td>{a.auctionId}</td>
                            <td>{a.startDate}</td>
                            <td>{a.endDate}</td>
                            <td>{a.auctionStatus}</td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    )
}
export default AllAuctions;