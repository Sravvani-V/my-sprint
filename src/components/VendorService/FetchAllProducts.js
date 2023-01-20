import React, { useEffect, useState } from 'react';

import axios from 'axios';

import './AllProducts.css'

import { Link } from 'react-router-dom';



import VendorDashboard from '../VendorDashboard';

import ProductDashboard from './ProductDashboard';




function FetchAllProducts() {



    const [product, setProduct] = useState([]);



    //similar to componentDidMount and componentDidUpdate

    useEffect(() => {

        axios.get("http://localhost:8081/product/all").then(resp => setProduct(resp.data));



    }, [])



    return (

        <div>

            <ProductDashboard/>

        <div className='details'>

       

           <center>

            <div className="box-container">

            {/* <VendorDashboard/> */}

           
            <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
            <h1>All Products</h1><br/>

                {

                    product.map(p =>

                        <div className="card-coloumns">

                            <div className="box" style={{ width: "500px" }}>

                                <img className="card-img-top" src={"https://queue-it.com/media/ppcp1twv/product-drop.jpg"} alt="Card image" />

                                <div className="card-body">

                                    <h4 className="card-title">{p.productName}</h4>

                                    <p className="card-text">{p.basePrice}</p>

                               

                                    <Link to={`/product/details/${p.productId}`} className="btn btn-primary">View</Link>


                        
                                </div>

                            </div>

                        </div>

                    )

                }



</div>
</center>

            </div>

        </div>)

}

export default FetchAllProducts;

