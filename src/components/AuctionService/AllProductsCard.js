import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './AuctionCard.css';

function AllProductsCard(){
    const[product, setProduct] =useState([]);

    useEffect(()=>{
        axios.get("http://localhost:8081/product/all").then(resp =>setProduct(resp.data));
    },[])

    return(
        
            <div className='grid-container'>
                <center>
                {
                    product.map(p=>
                        
                        <div className='grid-items' style={{width: "500px"}}>
                            <img className='card-img-top' src={"https://st.depositphotos.com/1518767/4297/i/600/depositphotos_42975149-stock-photo-hand-touching-product-on-search.jpg"} alt="Card image"/>
                            <div className='card-body'>
                                <h4 className='card-title'>{p.productId}</h4> 
                                {/* <p className='card-text'>{a.auctionStatus}</p> */}
                                <Link to={`/product/details/${p.productId}`} className="btn btn-primary">View</Link>
                            </div></div>)
                }
            </center>
        </div>
    )
}
export default AllProductsCard;