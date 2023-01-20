import React from "react";

import { Link } from 'react-router-dom';

// import Navbar from "./Navbar";
import "./ProductDashboard.css"



import {  IoIosArrowDroprightCircle,  IoIosHome} from "react-icons/io";
import VendorDashboard from "../VendorDashboard";

const ProductDashboard = () => {

    return (

        <div className="sidebar2">
            <VendorDashboard/>

            <ul className="ulitem">

                <li>

                    <IoIosHome className="icon" />

                   

                    <Link to="/vendor/dashboard"><p className="text">Home</p></Link>

                   

                </li><br></br>

                <li>

                    <IoIosArrowDroprightCircle className="icon" />

                   

                    <Link to="/addproduct"><p className="text">Add Product</p></Link>

                   

                </li><br></br>

                <li>

                    <IoIosArrowDroprightCircle className="icon" />

                    <Link to="/product/update"><p className="text">Update Product</p></Link>

                </li><br></br>

                <li>

                    <IoIosArrowDroprightCircle className="icon" />

                    <Link to="/product/delete"><p className="text">Delete Product</p></Link>

                </li><br/><br/>

                <li>

                    <IoIosArrowDroprightCircle className="icon" />

                    <Link to="/product/all"><p className="text">All Products</p></Link>

                </li>

            </ul>

            <div>

            </div>

        </div>

    )

}

export default ProductDashboard;