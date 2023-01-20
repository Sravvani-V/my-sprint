import { useState } from "react";
import axios from "axios";

import ProductDashboard from "./ProductDashboard";
import VendorDashboard from "../VendorDashboard";
function DeleteProduct() {

    const [product, setProduct] = useState(null);
    const [productId, setProductId] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = () => {

        axios.get("http://localhost:8081/product/" + productId)
        .then(resp => setProduct(resp.data))
            .catch(error => {
                setProduct(null)
                setMessage(error.response.data)
            })
    }

    function DeleteProduct(id) {
        axios.delete("http://localhost:8081/product/delete/"+id)
            .then(resp => {
                alert("Product deleted !!");
                handleSubmit();
            })
    }

    return (
        
    <div class="text-center"><center>
        {/* <VendorDashboard/> */}
        <ProductDashboard/>
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        <h2>Delete product By Id</h2>
        <div>
            <label>Enter ProductId</label>
            <input type="text" name="productId" value={productId} onChange={(event) => setProductId(event.target.value)} required />
        </div>
        <div>
            <button onClick={handleSubmit}> Search</button>
        </div>
        <div>
            {
                product !== null ?
                    <table className="table table-striped">
                        <thead className="thead-dark">

                        </thead>
                        <tr>
                            <td>{product.productId}</td>
                            <td>{product.productName}</td>
                            <td>{product.productPrice}</td>
                            <td><button onClick={() => DeleteProduct(product.productId)}>Delete</button></td>

                        </tr>
                    </table>
                    : <h2>{message}</h2>
            }
        </div></center>
    </div>)


}
export default DeleteProduct;