import React, { useState } from 'react';

import axios from 'axios';

import { Link } from 'react-router-dom';

import VendorDashboard from '../VendorDashboard';
import ProductDashboard from './ProductDashboard';
import './AddProduct.css';


function AddProduct() {



    const [pName, setPName] = useState("");

    const [bPrice, setBPrice] = useState("");

    const [pDetails, setPDetails] = useState("");

    const [pStatus, setPStatus] = useState("");

    const [cat, setCat] = useState("");





    const handleSubmit = () => {

        const payload = {

            productName: pName,

            basePrice: bPrice,

            productDetails: pDetails,

            productStatus: pStatus,

            productCategory: cat




        }

        axios.post("http://localhost:8081/product/save", payload).then(resp =>

            alert("Product is saved with id: " + resp.data.productId));

    }

   

    return (

        <div className="container">
            {/* <VendorDashboard/> */}
            <ProductDashboard/>

            <br/>

            <br/>

            <br/>
       <center>
            <h1>Add New Product</h1><br/>

            <div className="form-group" style={{width:"500px"}}>

                <label id="save" htmlFor='pName'>Product Name</label>

                <input type="text" name="pName" value={pName} className="form-control" id="pName"

                    onChange={(event) => setPName(event.target.value)} placeholder="Enter Product Name"/>

            </div>

            <br/>

            <div className='form-group' style={{width:"500px"}}>

                <label id="save" htmlFor='bPrice'>Base Price</label>

                <input type="text" name="bPrice" value={bPrice} className="form-control" id="bPrice"

                    onChange={(event) => setBPrice(event.target.value)} placeholder="Enter Base Price" />

            </div>

            <br/>

            <div className='form-group' style={{width:"500px"}}>

                <label id="save" htmlFor='pDetails'>Product Details</label>

                <input type="text" name="pDetails" value={pDetails} className="form-control" id="pDetails"

                    onChange={(event) => setPDetails(event.target.value)} placeholder="Enter Product Details" />

            </div>

            <br/>

            <div className='form-group' style={{width:"500px"}}>

                <label id="save" htmlFor='pStatus'>Product Status</label>

                <input type="text" name="pStatus" value={pStatus} className="form-control" id="pStatus"

                    onChange={(event) => setPStatus(event.target.value)} placeholder="Enter Product Status"/>

            </div>

            <br/>

            <div className='form-group' style={{width:"500px"}}>

                <label id="save" htmlFor='cat'>category</label>

                <input type="text" name="cat" value={cat} className="form-control" id="cat"

                    onChange={(event) => setCat(event.target.value)} placeholder="Enter ProductCategory" />

            </div>

            <br/>




            <button onClick={handleSubmit} className="btn btn-primary">Save</button>

            <br/>

            <br/>



            {/* <p><Link to="/product/dashboard"><b>Back</b></Link></p> */}
            <p><Link to="/product/dashboard">Back</Link></p>

            </center>



        </div>

    )



}

export default AddProduct;

