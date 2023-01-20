import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
//import about from 'https://thumbs.dreamstime.com/b/auction-28728699.jpg';
import './AuctionCard.css';

function AllAuctionCard(){
    const[auction, setAuction] =useState([]);

    useEffect(()=>{
        axios.get("http://localhost:8081/getallAuctions").then(resp =>setAuction(resp.data));
    },[])

    return(
        <div className='grid-container'>
            <center>
            {/* <div className='grid-items'> */}
                {
                    auction.map(a=>
                        // <div className='grid-items'>
                        <div className='grid-items' style={{width: "500px"}}>
                            <img className='card-img-top' src={"https://www.procurengine.com/pro_img/solutions/eauction.jpg"} alt="Card image"/>
                            <div className='card-body'>
                                <h4 className='card-title'>{a.auctionId}</h4> 
                                {/* <p className='card-text'>{a.auctionStatus}</p> */}
                                <Link to={`/auction/details/${a.auctionId}`} className="btn btn-primary">View</Link>
                           </div></div>)
                }
            
            </center>
        </div>
    )
}
export default AllAuctionCard;





//https://thumbs.dreamstime.com/b/auction-28728699.jpg