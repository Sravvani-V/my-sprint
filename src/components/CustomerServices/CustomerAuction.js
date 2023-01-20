import React, { useEffect,useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './AuctionCard.css';
import CustomerDashboard from '../CustomerDashboard';

function CustomerAuction() {
    const [auctionStatus, setAuctionStatus] = useState("");

    const [auction, setAuction] = useState([]);

    //const [message, setMessge] = useState("");
    useEffect(()=>{
        axios.get("http://localhost:8081/auction/getBy/" +"Active")
        .then(resp => setAuction(resp.data));

    },[])

    return (
        <div className='grid-container'>
            
            {
                auction.map(a=>
                    
                        <div className='grid-items' >
                            <img className='card-img-top' src={"https://h-educate.in/wp-content/uploads/2022/03/Difference-between-Kharif-crops-and-Rabi-crops-18.jpg.webp"} alt="Card image"/>
                            <div className='card-body'>
                                <h4 className='card-title'>{a.auctionId}</h4>
                                <h4 className='card-text'>{a.auctionStatus}</h4>
                                <Link to={`/customer/auction/details/${a.auctionId}`} className="btn-btn primary"><b>View</b></Link>
                                <br></br> <br></br>
                                 <Link to={`/bid/in/auction/${a.auctionId}`}className="btn-btn primary"><b>View Bids</b></Link>
                                </div>
                                
                                </div>)
            }
        
        
    </div>
    )
}
export default CustomerAuction;



