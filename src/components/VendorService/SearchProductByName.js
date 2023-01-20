import React, { useState } from 'react';

import axios from 'axios';

import { Link } from 'react-router-dom';



function SearchProductByName() {



    const [productName, setProductName] = useState("");

    const [product, setProduct] = useState("");

    const [message, setMessge] = useState("");



    const handleSubmit = () => {



        //api call



        axios.get("http://localhost:8081/product/name/" + productName)

            .then(resp => setProduct(resp.data))

            .catch(error => {

                setProduct( );

                setMessge(error.response.data)

            })



    }



    return (<div className='container'>

        <br /><br /><br />

        <h1>Search Product By Name</h1>

        <div id="cat2"><br />

            <label >Enter Product Name</label>

            <input type="text" name="ProductName" value={productName}

                onChange={(event) => setProductName(event.target.value)} placeholder="Enter Product Name" /><br />

        </div><br />

        <button onClick={handleSubmit}>Search</button><br /><br />

        {

             product !== null ? <div>

             <h2>Product Details</h2>

             <p id='y'>ProductId: {product.productId}</p>

             <p id='y'>ProductName: {product.productName}</p>

             <p id='y'>Base Price: {product.basePrice}</p>

             <p id='y'>Product Details: {product.productDetails}</p>

             <p id='y'>Product Status: {product.productStatus}</p>

             <p id='y'>Category: {product.productCategory}</p>

         </div>

             : <h3>{message}</h3>

               

        }



    </div>)



}



export default SearchProductByName;