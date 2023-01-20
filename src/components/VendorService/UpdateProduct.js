import React, { useEffect, useState } from 'react';

import axios from 'axios';

import { useParams } from 'react-router-dom';

import { Link } from 'react-router-dom';

import ProductDashboard from "./ProductDashboard";
import VendorDashboard from "../VendorDashboard";



function UpdateProduct() {

    const{pid}=useParams();

    const [pId, setPId] = useState("");

    const [pName, setPName] = useState("");

    const [bPrice, setBPrice] = useState("");

    const [pDetails, setPDetails] = useState("");

    const [pStatus, setPStatus] = useState("");

    const [cat, setCat] = useState("");



    useEffect(() => {

        axios.get("http://localhost:8081/product/" + pid).then(resp => {



            setPId(resp.data.productId);

            setPDetails(resp.data.productDetails);

            setPName(resp.data.productName);

            setBPrice(resp.data.basePrice);

            setPDetails(resp.data.productDetails);

            setPStatus(resp.data.productStatus);

            setCat(resp.data.category);



           

        });

    }, [])



    const updateProductSubmit = () => {

        const payload = {

            productId:pId,

            productName: pName,

            basePrice: bPrice,

            productDetails: pDetails,

            productStatus: pStatus,

            productCategory: cat



           



        }



        axios.put("http://localhost:8081/product/update", payload).then(resp => alert("Product Updated"));

    }

    return (<div>

        <div className="container">
            {/* <VendorDashboard/> */}
            <ProductDashboard/>

            <br/><br/><br/>

            <h1>Enter Product Details to Update</h1><br/><br/>

            <div className="form-group">



                <div>

                    <label id="pID">Product Id</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                    <input type="text" name="pId" value={pId} className="form-control" onChange={(event) => setPId(event.target.value)} disabled    placeholder='Enter Product ID'/><br/>

                </div>

                <br/>



                <div>

                    <label id="pName1">Product Name</label>

                    <input type="text" name="pName" value={pName} className="form-control" onChange={(event) => setPName(event.target.value)} placeholder='Enter Product Name'/>

                </div>

                <br/>



                <div>

                    <label id="bPrice1">Base Price</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                    <input type="text" name="bPrice" value={bPrice} className="form-control" onChange={(event) => setBPrice(event.target.value)} placeholder='Enter Base Price'/>

                </div>

                <br/>



                <div>

                    <label id="pDetails1">Product Details</label>

                    <input type="text" name="pDetails" value={pDetails} className="form-control" onChange={(event) => setPDetails(event.target.value)} placeholder='Enter Product Details'/>

                </div>

                <br/>



                <div>

                    <label id="pStatus1">Product Status</label>

                    <input type="text" name="pStatus" value={pStatus} className="form-control" onChange={(event) => setPStatus(event.target.value)} placeholder='Enter Product status'/>

                </div>

                <br/>



                <div>

                    <label id="cat4">Category</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                    <input type="text" name="cat" value={cat} className="form-control" onChange={(event) => setCat(event.target.value)} placeholder='Enter Product Category'/>

                </div>

               

               

                <br/>

                <button onClick={updateProductSubmit}>Update</button>

               

            </div>

        </div>

    </div>

    )



}

export default UpdateProduct;