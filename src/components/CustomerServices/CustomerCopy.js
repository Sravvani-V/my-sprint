import React, { useEffect,useState } from 'react';
import axios from 'axios';
import { Link,useNavigate } from 'react-router-dom';
import './AuctionCard.css';

function CustomerCopy() {
    const [auctionStatus, setAuctionStatus] = useState("");

    const [auction, setAuction] = useState([]);
    const navigate=useNavigate();
    //const [message, setMessge] = useState("");
    const handleSubmit=()=>{
        axios.get("http://localhost:8081/auction/getBy/" +"Active")
        .then(resp =>{
            console.log(resp.data);
            setAuction(resp.data); 
            navigate(`/auction/bids/:${resp.data.auctionId}`);
        });

    }

    return (<div className='details'>
        <div className='box-container'>
            {
                auction.map(a=>
                    <div className='card-columns'>
                        <div className='box' style={{width: "500px"}}>
                            <img className='card-img-top' src={"https://thumbs.dreamstime.com/b/auction-28728699.jpg"} alt="Card image"/>
                            <div className='card-body'>
                                <h4 className='card-title'>{a.auctionId}</h4>
                                <h4 className='card-text'>{a.auctionStatus}</h4>
                                <Link to={`/customer/auction/details/${a.auctionId}`} className="btn-btn primary">View</Link>
                                <br></br> <br></br>
                                <button onClick={handleSubmit}>View Bids</button>
                                {/* <Link to={`/bid/in/auction/${a.auctionId}`}className="btn-btn primary">View Bids</Link> */}
                                </div>
                                </div>
                                </div>)
            }
        </div>
        
    </div>
    )
}
export default CustomerCopy;



