import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";



function ProductDetails() {

    const [product, setProduct] = useState("");
    const { pid } = useParams();
    console.log(pid);

    useEffect(() => {
        axios.get("http://localhost:8081/product/" + pid).then(resp => setProduct(resp.data));
    }, [])

    return (
        <div>
            <h1>ProductDetails</h1>
            {
                product !== null &&
                <div>
                    <p>ProductId:{product.productId}</p>
                    <p>ProductName:{product.productName}</p>
                    <p>Base Price:{product.basePrice}</p>
                    <p>Product Details:{product.productDetails}</p>
                    <p>Product Status: {product.productStatus}</p>
                    <p>Category: {product.productCategory}</p>
                </div>

            }
        </div>
    )

}

export default ProductDetails;