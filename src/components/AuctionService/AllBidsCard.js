import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './AuctionCard.css';

function AllBidsCard(){
    const[bid, setBid] =useState([]);

    useEffect(()=>{
        axios.get("http://localhost:8081/getAllBids").then(resp =>setBid(resp.data));
    },[])

    return(
        
            <div className='grid-container'>
                <center>
                {
                    bid.map(b=>
                        //<div className='card-columns'>
                        <div className='grid-items' style={{width: "500px"}}>
                            <img className='card-img-top' src={"https://smallbizclub.com/wp-content/uploads/2021/04/keyboard.jpeg"}/>
                            <div className='card-body'>
                                <h4 className='card-title'>{b.bidId}</h4> 
                                {/* <p className='card-text'>{a.auctionStatus}</p> */}
                                <Link to={`/bid/details/${b.bidId}`} className="btn btn-primary">View</Link>
                            </div></div>)
                }
                </center>
            
        </div>
    )
}
export default AllBidsCard;



//"https://media.istockphoto.com/id/968390674/vector/buyers-hands-raising-auction-bid-paddles-with-numbers-of-competitive-price-auction-business.jpg?s=612x612&w=0&k=20&c=8ilTaKR8qk7naPN6vFZns9uYTSLoXru82f--QZzNMkU="} alt="Card image"